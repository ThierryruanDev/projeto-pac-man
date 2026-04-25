 // ================================================================
        //  MAPA  (0=dot 1=wall 2=empty 3=power)
        // ================================================================
        const BASE_MAP = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
            [1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1],
            [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 2, 2, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
            [1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1],
            [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
            [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ];

        const CELL = 20, COLS = 28, ROWS = 31;

        // Velocidades em frames para cruzar 1 célula
        // (menor = mais rápido)
        const PAC_FRAMES = 8;   // pac-man cruza 1 célula em 8 frames
        const GHOST_FRAMES = 10;  // fantasmas cruzam em 10 frames

        // Direções
        const L = { x: -1, y: 0 }, R = { x: 1, y: 0 }, U = { x: 0, y: -1 }, D = { x: 0, y: 1 };
        const ALL_DIRS = [L, R, U, D];

        // ================================================================
        //  ESTADO
        // ================================================================
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        let map, totalDots, score, highScore = 0, lives;
        let pac, ghosts;
        let gameRunning = false, gameOver = false, won = false, tick = 0;

        // ================================================================
        //  HELPERS
        // ================================================================
        function wrapCol(c) { return ((c % COLS) + COLS) % COLS; }

        function passable(c, r) {
            if (r < 0 || r >= ROWS) return false;
            c = wrapCol(c);
            return map[r][c] !== 1;
        }

        function opp(d) { return { x: -d.x, y: -d.y }; }
        function sameDir(a, b) { return a && b && a.x === b.x && a.y === b.y; }
        function manhattan(c1, r1, c2, r2) { return Math.abs(c1 - c2) + Math.abs(r1 - r2); }

        // Posição pixel interpolada entre duas células
        function lerpPixel(fc, fr, tc, tr, t) {
            // Lida com wrap do túnel
            let dc = tc - fc;
            if (dc > COLS / 2) dc -= COLS;
            if (dc < -COLS / 2) dc += COLS;
            return {
                px: (fc + dc * t) * CELL + CELL / 2,
                py: (fr + (tr - fr) * t) * CELL + CELL / 2
            };
        }

        // ================================================================
        //  INIT
        // ================================================================
        function initGame() {
            map = BASE_MAP.map(r => [...r]);
            totalDots = 0;
            for (let r = 0; r < ROWS; r++)
                for (let c = 0; c < COLS; c++)
                    if (map[r][c] === 0 || map[r][c] === 3) totalDots++;

            score = 0; lives = 3; gameOver = false; won = false; tick = 0;
            resetPac();
            resetGhosts();
            updateHUD(); drawLives(); hideOverlay();
        }

        // ── Pac-Man ──
        function resetPac() {
            pac = {
                col: 14, row: 23,           // célula atual
                toCol: 14, toRow: 23,       // célula destino
                fromCol: 14, fromRow: 23,   // célula origem
                frame: 0,                  // frame atual no trajeto (0..PAC_FRAMES)
                dir: null, nextDir: null,   // direção
                moving: false,
                mouth: 0, mouthDir: 1,
                dead: false, deadFrame: 0,
            };
        }

        // ── Fantasmas ──
        const GDEFS = [
            { col: 13, row: 11, color: '#FF0000', delay: 0 },
            { col: 13, row: 13, color: '#FFB8FF', delay: 100 },
            { col: 14, row: 13, color: '#FFB852', delay: 200 },
            { col: 15, row: 13, color: '#00FFFF', delay: 300 },
        ];

        function resetGhosts() {
            ghosts = GDEFS.map((d, i) => ({
                id: i, color: d.color,
                col: d.col, row: d.row,
                fromCol: d.col, fromRow: d.row,
                toCol: d.col, toRow: d.row,
                frame: 0, moving: false,
                dir: R,
                scared: false, scaredTick: 0,
                inHouse: i > 0, delay: d.delay,
            }));
        }

        // ================================================================
        //  LOOP
        // ================================================================
        function loop() {
            requestAnimationFrame(loop);
            if (!gameRunning) return;
            if (!gameOver && !won) { tick++; stepPac(); stepGhosts(); checkHits(); }
            render();
        }

        // ================================================================
        //  PAC-MAN  —  movimento baseado em células
        // ================================================================
        function stepPac() {
            if (pac.dead) {
                pac.deadFrame++;
                if (pac.deadFrame > 70) respawn();
                return;
            }

            // Animação boca
            pac.mouth += pac.mouthDir * 4;
            if (pac.mouth >= 42) pac.mouthDir = -1;
            if (pac.mouth <= 0) pac.mouthDir = 1;

            if (pac.moving) {
                pac.frame++;
                if (pac.frame >= PAC_FRAMES) {
                    // Chegou
                    pac.col = wrapCol(pac.toCol);
                    pac.row = pac.toRow;
                    pac.toCol = pac.col; pac.toRow = pac.row;
                    pac.fromCol = pac.col; pac.fromRow = pac.row;
                    pac.frame = 0; pac.moving = false;
                    eatCell();
                    if (won) return;
                    startPacMove();
                }
            } else {
                startPacMove();
            }
        }

        function startPacMove() {
            // Tenta nextDir primeiro; se não der, tenta dir atual
            for (const d of [pac.nextDir, pac.dir]) {
                if (!d) continue;
                const nc = pac.col + d.x, nr = pac.row + d.y;
                if (passable(nc, nr)) {
                    pac.dir = d;
                    pac.fromCol = pac.col; pac.fromRow = pac.row;
                    pac.toCol = nc; pac.toRow = nr;
                    pac.frame = 0; pac.moving = true;
                    return;
                }
            }
        }

        function eatCell() {
            const v = map[pac.row][pac.col];
            if (v === 0) { map[pac.row][pac.col] = 2; score += 10; totalDots--; updateHUD(); }
            if (v === 3) { map[pac.row][pac.col] = 2; score += 50; totalDots--; updateHUD(); activateScared(); }
            if (totalDots <= 0) triggerWin();
        }

        function pacPixel() {
            const t = pac.moving ? pac.frame / PAC_FRAMES : 1;
            return lerpPixel(pac.fromCol, pac.fromRow, pac.toCol, pac.toRow, t);
        }

        // ================================================================
        //  FANTASMAS  —  movimento baseado em células
        // ================================================================
        function stepGhosts() {
            for (const g of ghosts) {
                // Saída da casa
                if (g.inHouse) {
                    g.delay--;
                    if (g.delay <= 0) {
                        g.inHouse = false;
                        g.col = 13; g.row = 11;
                        g.fromCol = 13; g.fromRow = 11;
                        g.toCol = 13; g.toRow = 11;
                        g.frame = 0; g.moving = false;
                        g.dir = L;
                    }
                    continue;
                }

                // Scared countdown
                if (g.scared) { g.scaredTick--; if (g.scaredTick <= 0) g.scared = false; }

                if (g.moving) {
                    g.frame++;
                    if (g.frame >= GHOST_FRAMES) {
                        g.col = wrapCol(g.toCol);
                        g.row = g.toRow;
                        g.toCol = g.col; g.toRow = g.row;
                        g.fromCol = g.col; g.fromRow = g.row;
                        g.frame = 0; g.moving = false;
                        ghostDecide(g);
                    }
                } else {
                    ghostDecide(g);
                }
            }
        }

        // BFS: retorna a primeira direção do caminho mais curto de (sc,sr) até (tc,tr)
        function bfsDir(sc, sr, tc, tr) {
            const visited = new Set();
            const queue = [];
            const key = (c, r) => r * COLS + c;

            visited.add(key(sc, sr));

            for (const d of ALL_DIRS) {
                const nc = wrapCol(sc + d.x), nr = sr + d.y;
                if (passable(nc, nr) && !visited.has(key(nc, nr))) {
                    queue.push({ col: nc, row: nr, firstDir: d });
                    visited.add(key(nc, nr));
                }
            }

            while (queue.length > 0) {
                const { col, row, firstDir } = queue.shift();
                if (col === tc && row === tr) return firstDir;
                for (const d of ALL_DIRS) {
                    const nc = wrapCol(col + d.x), nr = row + d.y;
                    if (passable(nc, nr) && !visited.has(key(nc, nr))) {
                        visited.add(key(nc, nr));
                        queue.push({ col: nc, row: nr, firstDir });
                    }
                }
            }
            return null;
        }

        function ghostDecide(g) {
            const back = opp(g.dir);

            const cands = ALL_DIRS.filter(d => {
                if (sameDir(d, back)) return false;
                return passable(g.col + d.x, g.row + d.y);
            });

            if (cands.length === 0) {
                const bd = ALL_DIRS.find(d => sameDir(d, back));
                if (bd && passable(g.col + bd.x, g.row + bd.y)) {
                    g.dir = bd; ghostMove(g, bd);
                }
                return;
            }

            const dp = manhattan(g.col, g.row, pac.col, pac.row);
            const CHASE = 15;
            let chosen;

            if (g.scared) {
                chosen = cands.reduce((b, d) => {
                    const da = manhattan(g.col + d.x, g.row + d.y, pac.col, pac.row);
                    const db = manhattan(g.col + b.x, g.row + b.y, pac.col, pac.row);
                    return da > db ? d : b;
                });

            } else if (dp <= CHASE) {
                // Target individual por fantasma
                let tc = pac.col, tr = pac.row;
                if (g.id === 1 && pac.dir) { tc += pac.dir.x * 3; tr += pac.dir.y * 3; }
                if (g.id === 2) { tc = pac.col - 2; tr = pac.row + 2; }
                if (g.id === 3 && dp < 5) { tc = 1; tr = 29; }

                tr = Math.max(0, Math.min(ROWS - 1, tr));
                tc = wrapCol(tc);

                // BFS para caminho real no labirinto
                const bfsResult = bfsDir(g.col, g.row, tc, tr);
                if (bfsResult && cands.find(d => sameDir(d, bfsResult))) {
                    chosen = bfsResult;
                } else {
                    // Fallback Manhattan se BFS não retornar
                    chosen = cands.reduce((b, d) => {
                        const da = manhattan(g.col + d.x, g.row + d.y, tc, tr);
                        const db = manhattan(g.col + b.x, g.row + b.y, tc, tr);
                        return da < db ? d : b;
                    });
                }

            } else {
                const fwd = cands.find(d => sameDir(d, g.dir));
                if (fwd && Math.random() < 0.6) chosen = fwd;
                else chosen = cands[Math.floor(Math.random() * cands.length)];
            }

            g.dir = chosen;
            ghostMove(g, chosen);
        }

        function ghostMove(g, d) {
            g.fromCol = g.col; g.fromRow = g.row;
            g.toCol = g.col + d.x; g.toRow = g.row + d.y;
            g.frame = 0; g.moving = true;
        }

        function ghostPixel(g) {
            const t = g.moving ? g.frame / GHOST_FRAMES : 1;
            return lerpPixel(g.fromCol, g.fromRow, g.toCol, g.toRow, t);
        }

        // ================================================================
        //  POWER PELLET
        // ================================================================
        function activateScared() {
            for (const g of ghosts)
                if (!g.inHouse) { g.scared = true; g.scaredTick = 350; }
        }

        // ================================================================
        //  COLISÕES
        // ================================================================
        function checkHits() {
            if (pac.dead) return;
            const { px: ppx, py: ppy } = pacPixel();
            for (const g of ghosts) {
                if (g.inHouse) continue;
                const { px: gpx, py: gpy } = ghostPixel(g);
                if (Math.hypot(ppx - gpx, ppy - gpy) < CELL * 0.82) {
                    if (g.scared) {
                        g.scared = false; g.inHouse = true; g.delay = 220;
                        g.col = 13; g.row = 13; g.fromCol = 13; g.fromRow = 13;
                        g.toCol = 13; g.toRow = 13; g.frame = 0; g.moving = false;
                        score += 200; updateHUD();
                    } else {
                        pac.dead = true; pac.deadFrame = 0;
                    }
                }
            }
        }

        // ================================================================
        //  RESPAWN / FIM
        // ================================================================
        function respawn() {
            lives--;
            drawLives();
            if (lives <= 0) { triggerGameOver(); return; }
            resetPac();
            resetGhosts();
        }

        function triggerGameOver() {
            gameOver = true;
            if (score > highScore) highScore = score;
            updateHUD();
            showOverlay('GAME OVER', `PONTUAÇÃO: ${score}`, 'REINICIANDO EM 3 SEGUNDOS...');
            setTimeout(initGame, 3000);
        }

        function triggerWin() {
            won = true;
            if (score > highScore) highScore = score;
            updateHUD();
            showOverlay('VOCÊ VENCEU!', `PONTUAÇÃO: ${score}`, 'REINICIANDO EM 3 SEGUNDOS...');
            setTimeout(initGame, 3000);
        }

        // ================================================================
        //  RENDER
        // ================================================================
        function render() {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            drawWalls();
            drawDots();
            drawPac();
            drawAllGhosts();
        }

        function drawWalls() {
            for (let r = 0; r < ROWS; r++) {
                for (let c = 0; c < COLS; c++) {
                    if (map[r][c] === 1) {
                        const x = c * CELL, y = r * CELL;
                        ctx.fillStyle = '#1a1aff';
                        ctx.fillRect(x, y, CELL, CELL);
                        ctx.fillStyle = '#4455ff';
                        ctx.fillRect(x, y, CELL, 2);
                        ctx.fillRect(x, y, 2, CELL);
                        ctx.fillStyle = '#0008cc';
                        ctx.fillRect(x, y + CELL - 2, CELL, 2);
                        ctx.fillRect(x + CELL - 2, y, 2, CELL);
                    }
                }
            }
        }

        function drawDots() {
            const pulse = Math.sin(tick * 0.12) * 1.5 + 5;
            for (let r = 0; r < ROWS; r++) {
                for (let c = 0; c < COLS; c++) {
                    const cx = c * CELL + CELL / 2, cy = r * CELL + CELL / 2;
                    if (map[r][c] === 0) {
                        ctx.fillStyle = '#ffb8ae';
                        ctx.beginPath(); ctx.arc(cx, cy, 2.5, 0, Math.PI * 2); ctx.fill();
                    } else if (map[r][c] === 3) {
                        ctx.fillStyle = '#ffb8ae';
                        ctx.shadowBlur = 12; ctx.shadowColor = '#ffb8ae';
                        ctx.beginPath(); ctx.arc(cx, cy, pulse, 0, Math.PI * 2); ctx.fill();
                        ctx.shadowBlur = 0;
                    }
                }
            }
        }

        function drawPac() {
            const { px, py } = pacPixel();

            if (pac.dead) {
                const p = Math.min(pac.deadFrame / 70, 1);
                const a = p * Math.PI;
                if (a >= Math.PI) return;
                ctx.fillStyle = '#ffff00';
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.arc(px, py, CELL / 2 - 1, a, Math.PI * 2 - a);
                ctx.closePath(); ctx.fill();
                return;
            }

            let rot = 0;
            if (pac.dir) {
                if (pac.dir.x === 1) rot = 0;
                if (pac.dir.x === -1) rot = Math.PI;
                if (pac.dir.y === -1) rot = -Math.PI / 2;
                if (pac.dir.y === 1) rot = Math.PI / 2;
            }
            const mr = (pac.mouth * Math.PI) / 180;

            ctx.fillStyle = '#ffff00';
            ctx.shadowBlur = 8; ctx.shadowColor = '#ffff0077';
            ctx.save();
            ctx.translate(px, py); ctx.rotate(rot);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, CELL / 2 - 1, mr, Math.PI * 2 - mr);
            ctx.closePath(); ctx.fill();
            ctx.restore();
            ctx.shadowBlur = 0;
        }

        function drawAllGhosts() {
            for (const g of ghosts) {
                if (g.inHouse) continue;
                const { px, py } = ghostPixel(g);
                renderGhost(ctx, px, py, g);
            }
        }

        function renderGhost(c, px, py, g) {
            const R = CELL / 2 - 1;
            const x = px - R, y = py - R, w = R * 2;

            let col = g.color;
            if (g.scared) {
                const flash = g.scaredTick < 100 && Math.floor(tick / 6) % 2 === 0;
                col = flash ? '#ffffff' : '#0000dd';
            }

            // Corpo
            c.fillStyle = col;
            c.beginPath();
            c.arc(px, y + R, R, Math.PI, 0);
            c.lineTo(x + w, y + w - 3);
            // 3 ondas no rodapé
            const sw = w / 3;
            for (let i = 2; i >= 0; i--) {
                c.lineTo(x + (i + 1) * sw, y + w - 3);
                c.lineTo(x + i * sw + sw / 2, i % 2 === 0 ? y + w : y + w - 7);
            }
            c.lineTo(x, y + w - 3);
            c.closePath(); c.fill();

            if (!g.scared) {
                // Olhos
                c.fillStyle = '#fff';
                c.beginPath(); c.ellipse(px - 4, py - 3, 3.5, 4, 0, 0, Math.PI * 2); c.fill();
                c.beginPath(); c.ellipse(px + 4, py - 3, 3.5, 4, 0, 0, Math.PI * 2); c.fill();
                // Pupilas
                const ex = g.dir.x * 1.5, ey = g.dir.y * 1.5;
                c.fillStyle = '#00c';
                c.beginPath(); c.arc(px - 4 + ex, py - 3 + ey, 2, 0, Math.PI * 2); c.fill();
                c.beginPath(); c.arc(px + 4 + ex, py - 3 + ey, 2, 0, Math.PI * 2); c.fill();
            } else {
                c.fillStyle = '#fff';
                c.beginPath(); c.arc(px - 4, py - 2, 2, 0, Math.PI * 2); c.fill();
                c.beginPath(); c.arc(px + 4, py - 2, 2, 0, Math.PI * 2); c.fill();
                c.strokeStyle = '#fff'; c.lineWidth = 1.5;
                c.beginPath(); c.moveTo(px - 5, py + 3);
                for (let i = 0; i < 6; i++) c.lineTo(px - 5 + i * 2, py + 3 - (i % 2) * 4);
                c.stroke();
            }
        }

        // ================================================================
        //  HUD
        // ================================================================
        function updateHUD() {
            document.getElementById('scoreDisplay').textContent = score;
            document.getElementById('highDisplay').textContent = highScore;
        }

        function drawLives() {
            const lc = document.getElementById('livesCanvas');
            const lx = lc.getContext('2d');
            lx.clearRect(0, 0, lc.width, lc.height);
            for (let i = 0; i < lives; i++) {
                const cx = 13 + i * 30, cy = 13;
                lx.fillStyle = '#ffff00';
                lx.save(); lx.translate(cx, cy); lx.rotate(-0.1);
                lx.beginPath(); lx.moveTo(0, 0);
                lx.arc(0, 0, 11, 0.35, Math.PI * 2 - 0.35);
                lx.closePath(); lx.fill(); lx.restore();
            }
        }

        function showOverlay(t, s, m) {
            document.getElementById('ovTitle').textContent = t;
            document.getElementById('ovScore').textContent = s;
            document.getElementById('ovMsg').textContent = m;
            document.getElementById('overlay').classList.add('show');
        }
        function hideOverlay() { document.getElementById('overlay').classList.remove('show'); }

        // ================================================================
        //  INPUT
        // ================================================================
        const KEY_MAP = {
            ArrowLeft: L, ArrowRight: R, ArrowUp: U, ArrowDown: D
        };
        document.addEventListener('keydown', e => {
            const ss = document.getElementById('startScreen');
            if (ss.style.display !== 'none') {
                ss.style.display = 'none';
                gameRunning = true;
                return;
            }
            if (KEY_MAP[e.key]) { pac.nextDir = KEY_MAP[e.key]; e.preventDefault(); }
        });

        // ================================================================
        //  PREVIEW TELA INICIAL
        // ================================================================
        (function () {
            const pc = document.getElementById('previewCanvas');
            const px = pc.getContext('2d');
            GDEFS.forEach((def, i) => {
                renderGhost(px, 18 + i * 36, 18, {
                    color: def.color, scared: false, dir: R, scaredTick: 999
                });
            });
        })();

        // ================================================================
        //  START
        // ================================================================
        initGame();
        requestAnimationFrame(loop);