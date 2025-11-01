// Neon Highway Survival - rebuilt from scratch
(() => {
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');
  const hudInfo = document.getElementById('hud-info');
  const upgradeLayer = document.getElementById('upgrade-layer');
  const upgradeContainer = document.getElementById('upgrade-container');
  const upgradeTitle = document.getElementById('upgrade-title');
  const upgradeSubtitle = document.getElementById('upgrade-subtitle');

  function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const WORLD = { width: 3600, height: 2200 };
  const TWO_PI = Math.PI * 2;
  const HURT_FLASH_DURATION = 0.5;

  function clamp(val, min, max){ return Math.max(min, Math.min(max, val)); }
  function lerp(a, b, t){ return a + (b - a) * t; }
  function randRange(min, max){ return Math.random() * (max - min) + min; }
  function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  function circleRectIntersect(cx, cy, radius, rect){
    const closestX = clamp(cx, rect.x, rect.x + rect.w);
    const closestY = clamp(cy, rect.y, rect.y + rect.h);
    const dx = cx - closestX;
    const dy = cy - closestY;
    return dx * dx + dy * dy <= radius * radius;
  }

  const MAJOR_UPGRADES = [
    {
      id: 'overclocked-core',
      title: 'Overclocked Core',
      description: 'Permanently gain +60 max HP and instantly restore 60 HP.',
      repeatable: false,
      apply(game){
        game.player.maxHealth += 60;
        game.player.health = Math.min(game.player.maxHealth, game.player.health + 60);
      }
    },
    {
      id: 'plasma-overdrive',
      title: 'Plasma Overdrive',
      description: 'Foot-gun damage is boosted by +40%.',
      repeatable: true,
      apply(game){ game.player.damageMultiplier *= 1.4; }
    },
    {
      id: 'neural-uplink',
      title: 'Neural Uplink',
      description: 'Reduce fire cooldown by 25% for foot weapons.',
      repeatable: true,
      apply(game){ game.player.fireRateMultiplier *= 1.25; }
    },
    {
      id: 'quantum-boots',
      title: 'Quantum Boots',
      description: 'Permanent +25% sprint speed on foot.',
      repeatable: true,
      apply(game){ game.player.speedMultiplier *= 1.25; }
    },
    {
      id: 'nanite-surge',
      title: 'Nanite Surge',
      description: 'Unlock 12 HP/s regeneration after 1.5s without damage.',
      repeatable: false,
      apply(game){
        game.player.regenRate = Math.max(game.player.regenRate, 12);
        game.player.regenDelay = Math.min(game.player.regenDelay, 1.5);
      }
    },
    {
      id: 'phase-rounds',
      title: 'Phase Rounds',
      description: 'Your shots permanently pierce one extra enemy.',
      repeatable: false,
      apply(game){ game.playerPermanentPierce += 1; }
    },
    {
      id: 'arc-spitter-array',
      title: 'Arc Spitter Array',
      description: 'Fire two additional shots with each trigger pull, fanning around your aim.',
      repeatable: true,
      apply(game){
        game.player.additionalProjectiles += 2;
        game.player.multishotSpread = Math.min(0.45, game.player.multishotSpread + 0.03);
      }
    },
    {
      id: 'sentinel-drone',
      title: 'Sentinel Drone',
      description: 'Deploy an autonomous drone that orbits you and auto-locks the nearest enemy.',
      repeatable: false,
      apply(game){ game.spawnAutoDrone(); }
    }
  ];

  const MINOR_UPGRADES = [
    {
      id: 'adrenaline-rush',
      title: 'Adrenaline Rush',
      description: 'Speed +40% and fire rate +25% for 10 seconds.',
      createEffect(){
        return {
          name: 'Adrenaline Rush',
          duration: 10,
          modifiers: { speedMultiplier: 1.4, fireRateMultiplier: 1.25 }
        };
      }
    },
    {
      id: 'kinetic-barrier',
      title: 'Kinetic Barrier',
      description: 'Deploy a 80 HP shield for 15 seconds.',
      createEffect(){
        let granted = 80;
        return {
          name: 'Kinetic Barrier',
          duration: 15,
          onApply(game){
            game.player.shield += granted;
          },
          onRemove(game){
            game.player.shield = Math.max(0, game.player.shield - granted);
          }
        };
      }
    },
    {
      id: 'volatile-rounds',
      title: 'Volatile Rounds',
      description: 'Shots pierce 2 extra enemies but you take +25% damage for 12s.',
      createEffect(){
        return {
          name: 'Volatile Rounds',
          duration: 12,
          modifiers: { extraPierce: 2, damageTakenMultiplier: 1.25 }
        };
      }
    },
    {
      id: 'overload-barrage',
      title: 'Overload Barrage',
      description: 'Damage +70% but movement -20% for 8 seconds.',
      createEffect(){
        return {
          name: 'Overload Barrage',
          duration: 8,
          modifiers: { damageMultiplier: 1.7, speedMultiplier: 0.8 }
        };
      }
    }
  ];

    class InputManager{
      constructor(target){
        this.keysDown = new Set();
        this.keysPressed = new Set();
        this.mouse = { x:0, y:0, worldX:0, worldY:0, down:false, pressed:false };
        window.addEventListener('keydown', e => {
          const key = e.key.toLowerCase();
          if([' ', 'arrowup','arrowdown','arrowleft','arrowright','w','a','s','d'].includes(key)) e.preventDefault();
          if(!this.keysDown.has(key)) this.keysPressed.add(key);
          this.keysDown.add(key);
        });
        window.addEventListener('keyup', e => {
          const key = e.key.toLowerCase();
          this.keysDown.delete(key);
        });
        target.addEventListener('mousemove', e => {
          const rect = target.getBoundingClientRect();
          this.mouse.x = e.clientX - rect.left;
          this.mouse.y = e.clientY - rect.top;
        });
        target.addEventListener('mousedown', e => {
          if(e.button === 0){
            this.mouse.down = true;
            this.mouse.pressed = true;
            target.focus();
          }
        });
        window.addEventListener('mouseup', e => {
          if(e.button === 0) this.mouse.down = false;
        });
        target.addEventListener('contextmenu', e => e.preventDefault());
      }
      isDown(key){ return this.keysDown.has(key); }
      wasPressed(key){ return this.keysPressed.has(key); }
      updateEnd(){
        this.keysPressed.clear();
        this.mouse.pressed = false;
      }
    }

    class Camera{
      constructor(){ this.x = 0; this.y = 0; this.lerp = 0.12; }
      follow(targetX, targetY, dt){
        const desiredX = clamp(targetX - canvas.width / 2, 0, Math.max(0, WORLD.width - canvas.width));
        const desiredY = clamp(targetY - canvas.height / 2, 0, Math.max(0, WORLD.height - canvas.height));
        const smoothing = 1 - Math.pow(1 - this.lerp, dt * 60);
        this.x = lerp(this.x, desiredX, smoothing);
        this.y = lerp(this.y, desiredY, smoothing);
      }
    }

    class Player{
      constructor(x, y){
        this.x = x;
        this.y = y;
        this.headRadius = 10;
        this.bodyRadius = 18;
        this.speed = 280;
        this.speedMultiplier = 1;
        this.facing = 0;
        this.fireCooldown = 0;
        this.health = 120;
        this.maxHealth = 120;
        this.baseFireCooldown = 0.22;
        this.baseDamage = 30;
        this.damageMultiplier = 1;
        this.fireRateMultiplier = 1;
        this.regenRate = 0;
        this.regenDelay = 2.5;
        this.timeSinceHit = 0;
        this.shield = 0;
        this.damageTakenMultiplier = 1;
        this.additionalProjectiles = 0;
        this.multishotSpread = 0.18;
        this.vehicle = null;
      }
      draw(ctx, camera){
        const sx = this.x - camera.x;
        const sy = this.y - camera.y;
        const barWidth = 64;
        const barY = sy - this.bodyRadius - 18;
  const healthRatio = clamp(this.health / this.maxHealth, 0, 1);
        ctx.fillStyle = 'rgba(5,9,20,0.78)';
        ctx.fillRect(sx - barWidth / 2, barY, barWidth, 10);
        ctx.fillStyle = '#16a34a';
  ctx.fillRect(sx - barWidth / 2, barY, barWidth * healthRatio, 10);
        if(this.shield > 0){
          const shieldRatio = clamp(this.shield / this.maxHealth, 0, 1);
          ctx.fillStyle = 'rgba(59, 130, 246, 0.85)';
          ctx.fillRect(sx - barWidth / 2, barY, barWidth * shieldRatio, 10);
        }
        ctx.strokeStyle = 'rgba(255,255,255,0.25)';
        ctx.strokeRect(sx - barWidth / 2, barY, barWidth, 10);
        if(this.vehicle) return;
        ctx.fillStyle = '#22d3ee';
        ctx.beginPath();
        ctx.arc(sx, sy + 8, this.bodyRadius, 0, TWO_PI);
        ctx.fill();
        ctx.fillStyle = '#7dd3fc';
        ctx.beginPath();
        ctx.arc(sx, sy - 10, this.headRadius, 0, TWO_PI);
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + Math.cos(this.facing) * 32, sy + Math.sin(this.facing) * 32);
        ctx.stroke();
      }
    }

    class Vehicle{
      constructor(x, y, tint){
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.speed = 0;
        this.turnRate = 2.6;
        this.accel = 900;
        this.friction = 0.93;
        this.maxSpeed = 380;
        this.width = 70;
        this.height = 38;
        this.radius = 34;
        this.tint = tint;
        this.health = 220;
        this.maxHealth = 220;
        this.destroyed = false;
        this.fireCooldown = 0;
        this.vx = 0;
        this.vy = 0;
      }
      draw(ctx, camera){
        const sx = this.x - camera.x;
        const sy = this.y - camera.y;
        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.destroyed ? '#4b5563' : this.tint;
        ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        ctx.fillStyle = 'rgba(255,255,255,0.18)';
        ctx.fillRect(-this.width / 3, -this.height / 3, this.width * 2/3, this.height / 2.2);
        ctx.strokeStyle = '#fde68a';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this.width / 2 + 10, 0);
        ctx.lineTo(this.width / 2 - 8, -8);
        ctx.lineTo(this.width / 2 - 8, 8);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }
    }

    class Bullet{
      constructor(x, y, dx, dy, owner, damage, speed = 900){
        this.x = x;
        this.y = y;
        const len = Math.hypot(dx, dy) || 1;
        this.dx = dx / len;
        this.dy = dy / len;
        this.speed = speed;
        this.owner = owner; // 'player' | 'vehicle'
        this.damage = damage;
        this.life = 1.7;
        this.radius = 4;
        this.pierce = 0;
      }
      update(dt){
        this.x += this.dx * this.speed * dt;
        this.y += this.dy * this.speed * dt;
        this.life -= dt;
      }
      draw(ctx, camera){
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath();
        ctx.arc(this.x - camera.x, this.y - camera.y, this.radius, 0, TWO_PI);
        ctx.fill();
      }
    }

    class AutoTurret{
      constructor(game){
        this.game = game;
        this.angle = Math.random() * TWO_PI;
        this.distance = 72;
        this.fireDelay = 0.65;
        this.fireCooldown = randRange(0.2, 0.5);
        this.x = 0;
        this.y = 0;
      }
      update(dt){
        const player = this.game.player;
        this.angle = (this.angle + dt * 1.2) % TWO_PI;
        this.x = player.x + Math.cos(this.angle) * this.distance;
        this.y = player.y + Math.sin(this.angle) * this.distance;
        if(this.game.awaitingUpgrade || this.game.gameOver) return;
        this.fireCooldown -= dt;
        if(this.fireCooldown <= 0){
          const target = this.game.findNearestEnemy(this.x, this.y);
          if(target){
            const dx = target.x - this.x;
            const dy = target.y - this.y;
            const bullet = new Bullet(this.x, this.y, dx, dy, 'player', 22, 880);
            bullet.pierce = this.game.playerPermanentPierce + this.game.tempPierceBonus;
            this.game.bullets.push(bullet);
            this.fireCooldown = this.fireDelay;
          } else {
            this.fireCooldown = 0.25;
          }
        }
      }
      draw(ctx, camera){
        const sx = this.x - camera.x;
        const sy = this.y - camera.y;
        ctx.fillStyle = '#facc15';
        ctx.beginPath();
        ctx.arc(sx, sy, 9, 0, TWO_PI);
        ctx.fill();
        ctx.strokeStyle = 'rgba(250, 204, 21, 0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sx, sy, 15, 0, TWO_PI);
        ctx.stroke();
      }
    }

    class Enemy{
      constructor(x, y){
        this.x = x;
        this.y = y;
        this.radius = 16;
        this.headRadius = 10;
        this.speed = randRange(90, 140);
        this.health = 70;
        this.maxHealth = 70;
        this.hitCooldown = 0;
      }
      update(dt, targetX, targetY){
        const dx = targetX - this.x;
        const dy = targetY - this.y;
        const len = Math.hypot(dx, dy) || 1;
        this.x += (dx / len) * this.speed * dt;
        this.y += (dy / len) * this.speed * dt;
        this.x = clamp(this.x, 20, WORLD.width - 20);
        this.y = clamp(this.y, 20, WORLD.height - 20);
        if(this.hitCooldown > 0) this.hitCooldown -= dt;
      }
      draw(ctx, camera){
        const sx = this.x - camera.x;
        const sy = this.y - camera.y;
        ctx.fillStyle = '#ff4d6d';
        ctx.beginPath();
        ctx.arc(sx, sy + 6, this.radius, 0, TWO_PI);
        ctx.fill();
        ctx.fillStyle = '#ffb3c1';
        ctx.beginPath();
        ctx.arc(sx, sy - 10, this.headRadius, 0, TWO_PI);
        ctx.fill();
        const barWidth = 34;
        ctx.fillStyle = 'rgba(0,0,0,0.55)';
        ctx.fillRect(sx - barWidth/2, sy - this.radius - 14, barWidth, 6);
        ctx.fillStyle = '#fb7185';
        ctx.fillRect(sx - barWidth/2, sy - this.radius - 14, barWidth * (this.health / this.maxHealth), 6);
      }
    }

    class Game{
      constructor(){
        this.input = new InputManager(canvas);
        this.camera = new Camera();
        this.obstacles = [
          { x: 520, y: 360, w: 220, h: 120 },
          { x: 1620, y: 820, w: 320, h: 220 },
          { x: 2450, y: 620, w: 260, h: 110 },
          { x: 2200, y: 1500, w: 400, h: 160 }
        ];
        this.spawnDelay = 1.0;
        this.spawnTimer = 0.4;
        this.maxEnemies = 80;
        this.difficultyTimer = 0;
        this.timeAlive = 0;
        this.gameOver = false;
        this.playerLevel = 1;
        this.playerXP = 0;
        this.xpForNext = 20;
        this.playerPermanentPierce = 0;
        this.tempPierceBonus = 0;
        this.activeEffects = [];
        this.timedUpgradeInterval = 30;
        this.timedUpgradeTimer = this.timedUpgradeInterval;
        this.awaitingUpgrade = false;
        this.upgradeQueue = [];
        this.upgradeChoices = [];
        this.pendingUpgradeType = null;
        this.takenUpgrades = new Set();
        this.playerHurtTimer = 0;
        this.deathFade = 0;
        this.player = null;
        this.vehicles = [];
        this.bullets = [];
        this.enemies = [];
        this.autoCompanions = [];
        upgradeContainer.addEventListener('click', e => {
          const card = e.target.closest('.upgrade-card');
          if(!card || !this.awaitingUpgrade) return;
          const index = Number(card.dataset.index);
          if(Number.isFinite(index)) this.resolveUpgradeChoice(index);
        });
        this.reset();
        window.addEventListener('keydown', e => {
          if(e.key.toLowerCase() === 'e') this.toggleVehicle();
          if(e.key.toLowerCase() === 'r') this.reset();
        });
      }

      reset(){
        this.player = new Player(620, 560);
        this.vehicles = [
          new Vehicle(780, 640, '#f97316'),
          new Vehicle(1320, 960, '#3b82f6')
        ];
        this.bullets = [];
        this.enemies = [];
  this.autoCompanions = [];
        this.spawnDelay = 1.0;
        this.spawnTimer = 0.5;
        this.difficultyTimer = 0;
        this.timeAlive = 0;
        this.gameOver = false;
        this.playerLevel = 1;
        this.playerXP = 0;
        this.xpForNext = 20;
        this.playerPermanentPierce = 0;
        this.tempPierceBonus = 0;
        this.activeEffects = [];
        this.timedUpgradeTimer = this.timedUpgradeInterval;
        this.awaitingUpgrade = false;
        this.upgradeQueue = [];
        this.upgradeChoices = [];
        this.pendingUpgradeType = null;
        this.takenUpgrades.clear();
        this.playerHurtTimer = 0;
        this.deathFade = 0;
        this.player.shield = 0;
        upgradeLayer.classList.add('hidden');
        upgradeContainer.innerHTML = '';
      }

      toggleVehicle(){
        if(this.gameOver) return;
        if(this.player.vehicle){
          const v = this.player.vehicle;
          this.player.vehicle = null;
          v.speed *= 0.6;
          const exitAngle = v.angle + Math.PI;
          this.player.x = clamp(v.x + Math.cos(exitAngle) * (v.radius + this.player.bodyRadius + 6), this.player.bodyRadius, WORLD.width - this.player.bodyRadius);
          this.player.y = clamp(v.y + Math.sin(exitAngle) * (v.radius + this.player.bodyRadius + 6), this.player.bodyRadius, WORLD.height - this.player.bodyRadius);
        } else {
          const nearest = this.vehicles.find(v => !v.destroyed && Math.hypot(v.x - this.player.x, v.y - this.player.y) < v.radius + 10);
          if(nearest){
            this.player.vehicle = nearest;
            this.player.x = nearest.x;
            this.player.y = nearest.y;
            nearest.speed *= 0.9;
          }
        }
      }

      update(dt){
        this.playerHurtTimer = Math.max(0, this.playerHurtTimer - dt);
        if(this.gameOver){
          this.deathFade = Math.min(1, this.deathFade + dt * 0.8);
          this.camera.follow(this.player.x, this.player.y, dt);
          this.input.updateEnd();
          return;
        }
        this.deathFade = Math.max(0, this.deathFade - dt * 0.8);

        if(this.awaitingUpgrade){
          this.camera.follow(this.player.x, this.player.y, dt);
          this.input.updateEnd();
          return;
        }

        this.timeAlive += dt;
        this.difficultyTimer += dt;
        if(this.difficultyTimer > 10){
          this.difficultyTimer = 0;
          this.spawnDelay = Math.max(0.25, this.spawnDelay * 0.9);
        }

        this.timedUpgradeTimer -= dt;
        if(this.timedUpgradeTimer <= 0){
          this.timedUpgradeTimer += this.timedUpgradeInterval;
          this.queueUpgrade('minor');
          if(this.awaitingUpgrade){
            this.camera.follow(this.player.x, this.player.y, dt);
            this.input.updateEnd();
            return;
          }
        }

        const input = this.input;
        if(this.player.vehicle && this.player.vehicle.destroyed){
          this.player.vehicle = null;
        }

        if(this.player.vehicle){
          this.updateVehicleControl(this.player.vehicle, dt, true);
          this.player.x = this.player.vehicle.x;
          this.player.y = this.player.vehicle.y;
        } else {
          this.updatePlayerOnFoot(dt);
        }

        for(const vehicle of this.vehicles){
          if(vehicle === this.player.vehicle) continue;
          this.updateVehicleControl(vehicle, dt, false);
        }

        this.camera.follow(this.player.x, this.player.y, dt);

        this.player.facing = Math.atan2(input.mouse.worldY - this.player.y, input.mouse.worldX - this.player.x);
        if(this.player.fireCooldown > 0) this.player.fireCooldown -= dt;
        if(this.player.vehicle && this.player.vehicle.fireCooldown > 0) this.player.vehicle.fireCooldown -= dt;

        this.player.timeSinceHit += dt;
        if(this.player.regenRate > 0 && this.player.health < this.player.maxHealth && this.player.timeSinceHit >= this.player.regenDelay){
          this.player.health = Math.min(this.player.maxHealth, this.player.health + this.player.regenRate * dt);
        }

        this.updateEffects(dt);
        this.updateAutoCompanions(dt);
        this.handleShooting();

        this.updateBullets(dt);
        this.updateEnemies(dt);
        this.handleEnemyDamage();
        this.cleanupEntities();

        this.spawnTimer -= dt;
        if(this.spawnTimer <= 0 && this.enemies.length < this.maxEnemies){
          this.spawnEnemyNearPlayer();
          this.spawnTimer = this.spawnDelay * randRange(0.6, 1.1);
        }

        input.updateEnd();
      }

      updatePlayerOnFoot(dt){
        const input = this.input;
        const hor = (input.isDown('d') || input.isDown('arrowright') ? 1 : 0) - (input.isDown('a') || input.isDown('arrowleft') ? 1 : 0);
        const ver = (input.isDown('s') || input.isDown('arrowdown') ? 1 : 0) - (input.isDown('w') || input.isDown('arrowup') ? 1 : 0);
        let dx = hor, dy = ver;
        const len = Math.hypot(dx, dy);
        if(len > 0){ dx /= len; dy /= len; }
        const moveDist = this.player.speed * this.player.speedMultiplier * dt;
        this.tryMoveCircle(this.player, dx * moveDist, dy * moveDist, this.player.bodyRadius);
      }

      updateVehicleControl(vehicle, dt, isControlled){
        if(vehicle.destroyed){
          vehicle.speed *= 0.95;
          if(Math.abs(vehicle.speed) < 2) vehicle.speed = 0;
        } else if(isControlled){
          const forward = (this.input.isDown('w') || this.input.isDown('arrowup')) ? 1 : 0;
          const backward = (this.input.isDown('s') || this.input.isDown('arrowdown')) ? 1 : 0;
          const turnRight = (this.input.isDown('d') || this.input.isDown('arrowright')) ? 1 : 0;
          const turnLeft = (this.input.isDown('a') || this.input.isDown('arrowleft')) ? 1 : 0;
          const accel = forward - backward;
          if(accel !== 0){
            vehicle.speed += accel * vehicle.accel * dt;
          } else {
            vehicle.speed *= vehicle.friction;
            if(Math.abs(vehicle.speed) < 3) vehicle.speed = 0;
          }
          vehicle.speed = clamp(vehicle.speed, -vehicle.maxSpeed * 0.5, vehicle.maxSpeed);
          const steer = turnRight - turnLeft;
          if(steer !== 0 && Math.abs(vehicle.speed) > 5){
            vehicle.angle += steer * vehicle.turnRate * dt * Math.sign(vehicle.speed);
          }
        } else {
          vehicle.speed *= vehicle.friction;
          if(Math.abs(vehicle.speed) < 2) vehicle.speed = 0;
        }

        vehicle.vx = Math.cos(vehicle.angle) * vehicle.speed;
        vehicle.vy = Math.sin(vehicle.angle) * vehicle.speed;
        this.tryMoveCircle(vehicle, vehicle.vx * dt, vehicle.vy * dt, vehicle.radius);

        vehicle.x = clamp(vehicle.x, vehicle.radius, WORLD.width - vehicle.radius);
        vehicle.y = clamp(vehicle.y, vehicle.radius, WORLD.height - vehicle.radius);
      }

      tryMoveCircle(entity, dx, dy, radius){
        if(dx !== 0){
          const newX = clamp(entity.x + dx, radius, WORLD.width - radius);
          if(!this.collidesWithObstacles(newX, entity.y, radius)) entity.x = newX;
        }
        if(dy !== 0){
          const newY = clamp(entity.y + dy, radius, WORLD.height - radius);
          if(!this.collidesWithObstacles(entity.x, newY, radius)) entity.y = newY;
        }
      }

      collidesWithObstacles(x, y, radius){
        return this.obstacles.some(rect => circleRectIntersect(x, y, radius, rect));
      }

      handleShooting(){
        const input = this.input;
        if(this.player.vehicle){
          const vehicle = this.player.vehicle;
          if(!vehicle.destroyed && input.mouse.down && vehicle.fireCooldown <= 0){
            const muzzleX = vehicle.x + Math.cos(vehicle.angle) * (vehicle.width / 2 + 8);
            const muzzleY = vehicle.y + Math.sin(vehicle.angle) * (vehicle.width / 2 + 8);
            this.bullets.push(new Bullet(muzzleX, muzzleY, Math.cos(vehicle.angle), Math.sin(vehicle.angle), 'vehicle', 45, 1050));
            vehicle.fireCooldown = 0.16;
          }
        } else {
          if(input.mouse.down && this.player.fireCooldown <= 0){
            const damage = this.player.baseDamage * this.player.damageMultiplier;
            const baseAngle = Math.atan2(input.mouse.worldY - this.player.y, input.mouse.worldX - this.player.x);
            this.firePlayerShot(baseAngle, damage);
            const extra = this.player.additionalProjectiles;
            if(extra > 0){
              for(let i = 0; i < extra; i++){
                const side = i % 2 === 0 ? 1 : -1;
                const order = Math.floor(i / 2) + 1;
                const offset = side * this.player.multishotSpread * order;
                this.firePlayerShot(baseAngle + offset, damage);
              }
            }
            this.player.fireCooldown = this.player.baseFireCooldown / this.player.fireRateMultiplier;
          }
        }
      }

      firePlayerShot(angle, damage){
        const bullet = new Bullet(this.player.x, this.player.y, Math.cos(angle), Math.sin(angle), 'player', damage, 900);
        bullet.pierce = this.playerPermanentPierce + this.tempPierceBonus;
        this.bullets.push(bullet);
      }

      updateBullets(dt){
        for(let i = this.bullets.length - 1; i >= 0; i--){
          const b = this.bullets[i];
          b.update(dt);
          if(b.life <= 0 || b.x < -50 || b.y < -50 || b.x > WORLD.width + 50 || b.y > WORLD.height + 50){
            this.bullets.splice(i, 1);
            continue;
          }
          if(this.obstacles.some(rect => circleRectIntersect(b.x, b.y, b.radius, rect))){
            this.bullets.splice(i, 1);
            continue;
          }
          let hit = false;
          if(b.owner === 'player' || b.owner === 'vehicle'){
            for(let ei = this.enemies.length - 1; ei >= 0; ei--){
              const en = this.enemies[ei];
              const dx = b.x - en.x;
              const dy = b.y - en.y;
              if(dx * dx + dy * dy <= Math.pow(en.radius + b.radius, 2)){
                en.health -= b.damage;
                const enemyDied = en.health <= 0;
                if(enemyDied){
                  const slain = this.enemies.splice(ei, 1)[0];
                  this.onEnemyKilled(slain, b.owner);
                }
                if(b.owner === 'player' && b.pierce > 0){
                  b.pierce--;
                  continue;
                }
                hit = true;
                break;
              }
            }
          }
          if(!hit && b.owner === 'player'){
            for(const vehicle of this.vehicles){
              if(vehicle.destroyed) continue;
              const dx = b.x - vehicle.x;
              const dy = b.y - vehicle.y;
              if(dx * dx + dy * dy <= Math.pow(vehicle.radius + b.radius, 2)){
                vehicle.health -= b.damage * 0.6;
                if(vehicle.health <= 0){ this.destroyVehicle(vehicle); }
                hit = true;
                break;
              }
            }
          }
          if(hit){ this.bullets.splice(i, 1); }
        }
      }

      destroyVehicle(vehicle){
        vehicle.destroyed = true;
        vehicle.speed = 0;
        if(this.player.vehicle === vehicle){
          this.player.vehicle = null;
          const exitAngle = vehicle.angle + Math.PI * 0.6;
          this.player.x = clamp(vehicle.x + Math.cos(exitAngle) * (vehicle.radius + this.player.bodyRadius + 6), this.player.bodyRadius, WORLD.width - this.player.bodyRadius);
          this.player.y = clamp(vehicle.y + Math.sin(exitAngle) * (vehicle.radius + this.player.bodyRadius + 6), this.player.bodyRadius, WORLD.height - this.player.bodyRadius);
        }
      }

      onEnemyKilled(enemy){
        this.grantXP(7);
      }

      grantXP(amount){
        if(this.gameOver) return;
        this.playerXP += amount;
        while(this.playerXP >= this.xpForNext){
          this.playerXP -= this.xpForNext;
          this.playerLevel++;
          this.xpForNext = Math.round(this.xpForNext * 1.45 + 10);
          this.queueUpgrade('major');
        }
      }

      queueUpgrade(type){
        if(this.gameOver) return;
        if(this.awaitingUpgrade){
          this.upgradeQueue.push(type);
        } else {
          this.presentUpgradeChoices(type);
        }
      }

      presentUpgradeChoices(type){
        this.awaitingUpgrade = true;
        this.pendingUpgradeType = type;
        const isMajor = type === 'major';
        const count = isMajor ? 3 : 2;
        const pool = isMajor ? MAJOR_UPGRADES : MINOR_UPGRADES;
        let candidates = pool;
        if(isMajor){
          const filtered = pool.filter(u => u.repeatable || !this.takenUpgrades.has(u.id));
          if(filtered.length >= count) candidates = filtered;
        }
        const shuffled = shuffle(candidates.slice(0));
        const options = shuffled.slice(0, Math.min(count, shuffled.length));
        this.upgradeChoices = options;
        upgradeTitle.textContent = isMajor ? 'Choose a Major Upgrade' : 'Choose a Timed Boost';
        upgradeSubtitle.textContent = isMajor ? 'Level up! Lock in a permanent mutation.' : 'Flash decision: temporary power with trade-offs.';
        upgradeContainer.innerHTML = options.map((opt, index) => (
          `<article class="upgrade-card" data-index="${index}">
            <h3>${opt.title}</h3>
            <p>${opt.description}</p>
          </article>`
        )).join('');
        upgradeLayer.classList.remove('hidden');
        this.input.mouse.down = false;
      }

      resolveUpgradeChoice(index){
        const option = this.upgradeChoices[index];
        if(!option) return;
        if(this.pendingUpgradeType === 'major'){
          this.applyMajorUpgrade(option);
        } else {
          this.applyMinorUpgrade(option);
        }
        upgradeLayer.classList.add('hidden');
        upgradeContainer.innerHTML = '';
        this.awaitingUpgrade = false;
        this.upgradeChoices = [];
        this.pendingUpgradeType = null;
        if(this.upgradeQueue.length > 0){
          const next = this.upgradeQueue.shift();
          this.presentUpgradeChoices(next);
        }
      }

      applyMajorUpgrade(option){
        option.apply(this);
        if(!option.repeatable) this.takenUpgrades.add(option.id);
      }

      applyMinorUpgrade(option){
        const effectConfig = option.createEffect(this);
        if(effectConfig) this.applyTimedEffect(effectConfig);
      }

      applyTimedEffect(config){
        const effect = {
          name: config.name,
          remaining: config.duration,
          modifiers: config.modifiers || null,
          onRemove: config.onRemove || null
        };
        if(config.onApply) config.onApply(this);
        if(effect.modifiers){
          const mods = effect.modifiers;
          if(mods.speedMultiplier) this.player.speedMultiplier *= mods.speedMultiplier;
          if(mods.fireRateMultiplier) this.player.fireRateMultiplier *= mods.fireRateMultiplier;
          if(mods.damageMultiplier) this.player.damageMultiplier *= mods.damageMultiplier;
          if(mods.damageTakenMultiplier) this.player.damageTakenMultiplier *= mods.damageTakenMultiplier;
          if(mods.extraPierce){
            this.tempPierceBonus += mods.extraPierce;
          }
        }
        this.activeEffects.push(effect);
      }

      updateEffects(dt){
        for(let i = this.activeEffects.length - 1; i >= 0; i--){
          const effect = this.activeEffects[i];
          effect.remaining -= dt;
          if(effect.remaining <= 0){
            this.removeEffectAt(i);
          }
        }
      }

      updateAutoCompanions(dt){
        for(const companion of this.autoCompanions){
          companion.update(dt);
        }
      }

      removeEffectAt(index){
        const effect = this.activeEffects[index];
        if(effect.modifiers){
          const mods = effect.modifiers;
          if(mods.speedMultiplier) this.player.speedMultiplier /= mods.speedMultiplier;
          if(mods.fireRateMultiplier) this.player.fireRateMultiplier /= mods.fireRateMultiplier;
          if(mods.damageMultiplier) this.player.damageMultiplier /= mods.damageMultiplier;
          if(mods.damageTakenMultiplier) this.player.damageTakenMultiplier /= mods.damageTakenMultiplier;
          if(mods.extraPierce){
            this.tempPierceBonus = Math.max(0, this.tempPierceBonus - mods.extraPierce);
          }
        }
        if(effect.onRemove) effect.onRemove(this);
        this.activeEffects.splice(index, 1);
      }

      spawnAutoDrone(){
        this.autoCompanions.push(new AutoTurret(this));
      }

      findNearestEnemy(x, y){
        let best = null;
        let bestDistSq = Infinity;
        for(const en of this.enemies){
          const dx = en.x - x;
          const dy = en.y - y;
          const distSq = dx * dx + dy * dy;
          if(distSq < bestDistSq){
            bestDistSq = distSq;
            best = en;
          }
        }
        return best;
      }

      damagePlayer(amount){
        let incoming = amount * this.player.damageTakenMultiplier;
        this.player.timeSinceHit = 0;
        let consumed = 0;
        if(this.player.shield > 0){
          consumed = Math.min(this.player.shield, incoming);
          this.player.shield -= consumed;
          incoming -= consumed;
        }
        if(consumed > 0 || incoming > 0){
          this.playerHurtTimer = HURT_FLASH_DURATION;
        }
        if(incoming > 0){
          this.player.health -= incoming;
          if(this.player.health <= 0){
            this.player.health = 0;
            this.gameOver = true;
          }
        }
      }

      updateEnemies(dt){
        const target = this.player.vehicle && !this.player.vehicle.destroyed ? this.player.vehicle : this.player;
        for(const en of this.enemies){
          en.update(dt, target.x, target.y);
        }
      }

      handleEnemyDamage(){
        let vehicleTarget = this.player.vehicle && !this.player.vehicle.destroyed ? this.player.vehicle : null;
        let targetEntity = vehicleTarget ?? this.player;
        let targetRadius = vehicleTarget ? vehicleTarget.radius : this.player.bodyRadius;
        for(const en of this.enemies){
          if(en.hitCooldown > 0) continue;
          const dx = en.x - targetEntity.x;
          const dy = en.y - targetEntity.y;
          const distSq = dx * dx + dy * dy;
          const hitDist = Math.pow(en.radius + targetRadius - 4, 2);
          if(distSq <= hitDist){
            if(vehicleTarget){
              vehicleTarget.health -= 18;
              if(vehicleTarget.health <= 0){
                this.destroyVehicle(vehicleTarget);
                vehicleTarget = null;
                targetEntity = this.player;
                targetRadius = this.player.bodyRadius;
              }
            } else {
              this.damagePlayer(12);
            }
            en.hitCooldown = 0.45;
          }
        }
      }

      cleanupEntities(){
        this.enemies = this.enemies.filter(en => en.health > 0);
      }

      spawnEnemyNearPlayer(){
        const target = this.player.vehicle && !this.player.vehicle.destroyed ? this.player.vehicle : this.player;
        for(let attempt = 0; attempt < 6; attempt++){
          const angle = Math.random() * TWO_PI;
          const distance = randRange(260, 420);
          let sx = target.x + Math.cos(angle) * distance;
          let sy = target.y + Math.sin(angle) * distance;
          sx = clamp(sx, 40, WORLD.width - 40);
          sy = clamp(sy, 40, WORLD.height - 40);
          if(!this.collidesWithObstacles(sx, sy, 14)){
            this.enemies.push(new Enemy(sx, sy));
            return;
          }
        }
      }

      draw(){
        const cam = this.camera;
        ctx.fillStyle = '#081226';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.drawGrid();
        this.drawObstacles();

        for(const vehicle of this.vehicles) vehicle.draw(ctx, cam);
  for(const companion of this.autoCompanions) companion.draw(ctx, cam);
        this.player.draw(ctx, cam);
        for(const enemy of this.enemies) enemy.draw(ctx, cam);
        for(const bullet of this.bullets) bullet.draw(ctx, cam);

        if(this.playerHurtTimer > 0){
          const alpha = Math.min(0.45, (this.playerHurtTimer / HURT_FLASH_DURATION) * 0.45);
          ctx.fillStyle = `rgba(239, 68, 68, ${alpha})`;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        if(this.deathFade > 0){
          ctx.fillStyle = `rgba(4, 7, 16, ${this.deathFade * 0.7})`;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        this.drawCrosshair();
        this.updateHud();
      }

      drawGrid(){
        const cam = this.camera;
        const step = 120;
        ctx.strokeStyle = 'rgba(56,189,248,0.08)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        const offsetX = -(cam.x % step);
        for(let x = offsetX; x <= canvas.width + step; x += step){
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
        }
        const offsetY = -(cam.y % step);
        for(let y = offsetY; y <= canvas.height + step; y += step){
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
        }
        ctx.stroke();
      }

      drawObstacles(){
        const cam = this.camera;
        ctx.fillStyle = '#0f172a';
        for(const rect of this.obstacles){
          ctx.fillRect(rect.x - cam.x, rect.y - cam.y, rect.w, rect.h);
        }
      }

      drawCrosshair(){
        const { x, y } = this.input.mouse;
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.85)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x - 10, y);
        ctx.lineTo(x + 10, y);
        ctx.moveTo(x, y - 10);
        ctx.lineTo(x, y + 10);
        ctx.stroke();
      }

      updateHud(){
        const playerHealth = `${Math.max(0, Math.round(this.player.health))}/${this.player.maxHealth}`;
        const vehicleStatus = this.player.vehicle ? `Vehicle ${Math.max(0, Math.round(this.player.vehicle.health))}/${this.player.vehicle.maxHealth}` : 'On foot';
        const xpLine = `Level ${this.playerLevel} | XP ${Math.floor(this.playerXP)}/${this.xpForNext}`;
        const boostTimer = this.awaitingUpgrade ? 'awaiting choice' : `${Math.max(0, this.timedUpgradeTimer).toFixed(1)}s`;
        const shieldLine = this.player.shield > 0 ? `Shield: ${Math.round(this.player.shield)}` : null;
        const droneLine = this.autoCompanions.length ? `Sentinel: ${this.autoCompanions.length} online` : null;
        const info = [
          `Time Alive: ${this.timeAlive.toFixed(1)}s`,
          xpLine,
          `Player: ${playerHealth}`,
          vehicleStatus,
          `Next Boost: ${boostTimer}`,
          `Enemies: ${this.enemies.length}`
        ];
        if(shieldLine) info.push(shieldLine);
        if(droneLine) info.push(droneLine);
        if(this.activeEffects.length){
          const effects = this.activeEffects
            .map(effect => `${effect.name} (${Math.ceil(effect.remaining)}s)`)
            .join(', ');
          info.push(`Effects: ${effects}`);
        }
        if(this.gameOver) info.push('<span class="warning">You died. Press R to restart.</span>');
        hudInfo.innerHTML = info.join('<br>');
      }
    }

  const game = new Game();
  let lastTime = performance.now();
  let gameStarted = false;

  function loop(now){
    if (!gameStarted) {
      requestAnimationFrame(loop);
      return;
    }
    const dt = Math.min((now - lastTime) / 1000, 0.033);
    lastTime = now;
    const input = game.input;
    input.mouse.worldX = game.camera.x + input.mouse.x;
    input.mouse.worldY = game.camera.y + input.mouse.y;
    game.update(dt);
    game.draw();
    requestAnimationFrame(loop);
  }

  // Start menu handler
  const startMenu = document.getElementById('start-menu');
  const startButton = document.getElementById('start-button');
  
  startButton.addEventListener('click', () => {
    startMenu.classList.add('hidden');
    gameStarted = true;
    lastTime = performance.now(); // Reset time to avoid huge dt on first frame
    canvas.focus(); // Focus canvas for input
  });

  requestAnimationFrame(loop);
})();
