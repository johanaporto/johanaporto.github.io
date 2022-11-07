const ctx = document.getElementById('canva').getContext('2d');    //contexto, será acessado para manipular conteúdo do canvas;

const centroX = 300;
const centroY = 300;
const orbt_sz = 200;        
const orbl_sz = 30;         
const orbl_s = 50; 
const orbl_z = 70; 
const sol_sz = 40;          
const lua_sz = 10;           
const lua_s = 5;
const lua_z = 10;
const terra_sz = 17;        
const tau = 2 * Math.PI;    
const t_terra = 20;         
const t_lua = 10;
const t_lua2 = 1;
const t_lua3 = 5;         

const sol = new Path2D();
const lua = new Path2D();
const terra = new Path2D();
const terras = new Path2D();

function init() {
    sol.arc(0,0,sol_sz,0,6.29,false);
    lua.arc(0,0,lua_sz,0,6.29,false);
    terra.arc(0,0,terra_sz,0,6.29,false);
    window.requestAnimationFrame(draw);
}

function draw() {
    ctx.fillRect(0, 0, 1200, 600);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.save();

        ctx.translate(centroX, centroY);

        const time = new Date();
        ctx.rotate((tau/t_terra) * time.getSeconds() + (tau/(t_terra*1000)) * time.getMilliseconds());
        ctx.translate(200, 0);

        ctx.fillStyle = 'green';
        ctx.fill(terra); 

        ctx.save();
            ctx.rotate((tau/t_lua) * time.getSeconds() + (tau/(t_lua*1000)) * time.getMilliseconds());
            ctx.translate(0, orbl_sz);
            ctx.fillStyle = 'white';
            ctx.fill(lua);
        ctx.restore();

        ctx.save();
            ctx.rotate((tau/t_lua2) * time.getSeconds() + (tau/(t_lua2*1000)) * time.getMilliseconds());
            ctx.translate(0, orbl_s);
            ctx.fillStyle = 'gray';
            ctx.fill(lua);
        ctx.restore();

        ctx.save();
            ctx.rotate((tau/t_lua3) * time.getSeconds() + (tau/(t_lua3*1000)) * time.getMilliseconds());
            ctx.translate(0, orbl_z);
            ctx.fillStyle = 'pink';
            ctx.fill(lua);
        ctx.restore();

        ctx.beginPath();
        ctx.arc(0, 0, orbl_sz, 0, tau, false);
        ctx.strokeStyle = 'white';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, orbl_s, 0, tau, false);
        ctx.strokeStyle = 'white';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, orbl_z, 0, tau, false);
        ctx.strokeStyle = 'aliceblue';
        ctx.stroke();

    ctx.restore();  

    ctx.beginPath();
    ctx.arc(centroX, centroY, orbt_sz, 0, tau, false);
    ctx.strokeStyle = 'white';
    ctx.stroke();

    ctx.save();
        ctx.translate(centroX, centroY);
        ctx.fillStyle = 'yellow';
        ctx.fill(sol);
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'orange';
        ctx.stroke(sol);
    ctx.restore();

    window.requestAnimationFrame(draw);
}

init();
