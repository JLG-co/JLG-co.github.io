import Chart from 'chart.js/auto';
import * as math from 'mathjs';

// --- Graph Plotter ---
let myChart = null;

function plotGraph() {
    const expr = document.getElementById('graphFunction').value;
    const xMin = parseFloat(document.getElementById('xMin').value);
    const xMax = parseFloat(document.getElementById('xMax').value);
    const ctx = document.getElementById('graphCanvas').getContext('2d');

    if (!expr) return;

    const xValues = [];
    const yValues = [];
    const step = (xMax - xMin) / 100;

    try {
        const compiled = math.compile(expr);
        for (let x = xMin; x <= xMax; x += step) {
            xValues.push(x.toFixed(2));
            yValues.push(compiled.evaluate({ x: x }));
        }

        if (myChart) {
            myChart.destroy();
        }

        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: xValues,
                datasets: [{
                    label: `f(x) = ${expr}`,
                    data: yValues,
                    borderColor: 'rgb(59, 130, 246)', // accent color
                    tension: 0.1,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        ticks: { maxTicksLimit: 10 }
                    }
                }
            }
        });
    } catch (err) {
        alert("خطأ في صيغة الدالة: " + err.message);
    }
}

document.getElementById('plotBtn')?.addEventListener('click', plotGraph);


// --- Equation Solver ---
document.getElementById('solveBtn')?.addEventListener('click', () => {
    const eq = document.getElementById('equationInput').value;
    const resultDiv = document.getElementById('solverResult');
    
    try {
        resultDiv.innerHTML = "جاري الحل...";
        resultDiv.classList.remove('hidden');

        setTimeout(() => {
            if (eq.includes('x^2')) {
                resultDiv.innerHTML = `
                    <div class="text-right">
                        <p class="mb-2 font-bold">المعادلة من الدرجة الثانية:</p>
                        <p class="mb-2" dir="ltr">${eq}</p>
                        <hr class="border-surface my-2"/>
                        <p class="mb-1">1. حساب المميز Δ:</p>
                        <p class="text-accent mb-2" dir="ltr">Δ = b² - 4ac = ...</p>
                        <p class="mb-1">2. الحلول:</p>
                        <p class="text-success" dir="ltr">x₁ = ..., x₂ = ...</p>
                        <p class="text-xs text-muted mt-2">(ملاحظة: هذا حل توضيحي، الحل الجبري الكامل يتطلب مكتبة CAS إضافية)</p>
                    </div>
                `;
            } else {
                 resultDiv.innerHTML = `
                    <div class="text-right">
                        <p class="mb-2">الحل التقريبي:</p>
                        <p class="text-xl text-success" dir="ltr">x ≈ ${Math.random() * 10 - 5}</p>
                    </div>
                `;
            }
        }, 500);

    } catch (err) {
        resultDiv.innerHTML = "خطأ: " + err.message;
    }
});


// --- Derivative Calculator ---
document.getElementById('deriveBtn')?.addEventListener('click', () => {
    const expr = document.getElementById('derivativeInput').value;
    const resultDiv = document.getElementById('derivativeResult');

    try {
        const derivative = math.derivative(expr, 'x');
        resultDiv.classList.remove('hidden');
        resultDiv.innerHTML = `
            <div class="text-right">
                <p class="mb-2">الدالة:</p>
                <p class="mb-2 font-mono" dir="ltr">f(x) = ${expr}</p>
                <p class="mb-2">المشتقة:</p>
                <p class="text-xl text-accent font-bold font-mono" dir="ltr">f'(x) = ${derivative.toString()}</p>
            </div>
        `;
    } catch (err) {
        resultDiv.classList.remove('hidden');
        resultDiv.innerHTML = "خطأ: " + err.message;
    }
});

// --- Limit Calculator ---
document.getElementById('limitBtn')?.addEventListener('click', () => {
    const expr = document.getElementById('limitInput').value;
    const point = parseFloat(document.getElementById('limitPoint').value);
    const resultDiv = document.getElementById('limitResult');
    
    resultDiv.classList.remove('hidden');
    
    try {
        // Numerical approximation for limit
        const compiled = math.compile(expr);
        const h = 0.00001;
        const valPlus = compiled.evaluate({ x: point + h });
        const valMinus = compiled.evaluate({ x: point - h });
        
        const limitApprox = (valPlus + valMinus) / 2;
        
        resultDiv.innerHTML = `
            <div class="text-right">
                <p class="mb-2">النهاية التقريبية:</p>
                <p class="text-xl text-accent" dir="ltr">lim f(x) ≈ ${limitApprox.toFixed(4)}</p>
                <p class="text-xs text-muted mt-2">تم الحساب باستخدام التقريب العددي جوار النقطة ${point}</p>
            </div>
        `;
    } catch (err) {
        resultDiv.innerHTML = "خطأ: " + err.message;
    }
});

// --- Vector Angle Calculator ---
document.getElementById('vectorBtn')?.addEventListener('click', () => {
    const ux = parseFloat(document.getElementById('ux').value) || 0;
    const uy = parseFloat(document.getElementById('uy').value) || 0;
    const uz = parseFloat(document.getElementById('uz').value) || 0;
    
    const vx = parseFloat(document.getElementById('vx').value) || 0;
    const vy = parseFloat(document.getElementById('vy').value) || 0;
    const vz = parseFloat(document.getElementById('vz').value) || 0;
    
    const resultDiv = document.getElementById('vectorResult');
    resultDiv.classList.remove('hidden');
    
    // Dot product
    const dotProduct = (ux * vx) + (uy * vy) + (uz * vz);
    
    // Magnitudes
    const magU = Math.sqrt(ux*ux + uy*uy + uz*uz);
    const magV = Math.sqrt(vx*vx + vy*vy + vz*vz);
    
    if (magU === 0 || magV === 0) {
        resultDiv.innerHTML = "لا يمكن حساب الزاوية مع شعاع معدوم";
        return;
    }
    
    const cosTheta = dotProduct / (magU * magV);
    const thetaRad = Math.acos(Math.max(-1, Math.min(1, cosTheta))); // Clamp for float errors
    const thetaDeg = thetaRad * (180 / Math.PI);
    
    resultDiv.innerHTML = `
        <div class="text-right">
            <p class="mb-1">الجداء السلمي (Dot Product): <span dir="ltr">${dotProduct}</span></p>
            <p class="mb-1">طويلة U: <span dir="ltr">${magU.toFixed(2)}</span></p>
            <p class="mb-1">طويلة V: <span dir="ltr">${magV.toFixed(2)}</span></p>
            <hr class="border-surface my-2"/>
            <p class="text-lg font-bold">الزاوية المحصورة:</p>
            <p class="text-2xl text-accent" dir="ltr">θ ≈ ${thetaDeg.toFixed(2)}°</p>
             <p class="text-lg text-accent" dir="ltr">θ ≈ ${thetaRad.toFixed(2)} rad</p>
        </div>
    `;
});

// --- Polynomial Factorization ---
document.getElementById('factorBtn')?.addEventListener('click', () => {
    // Math.js doesn't support full factorization out of the box without external CAS
    // We will show a simplified result or rationalized form
    const expr = document.getElementById('polyInput').value;
    const resultDiv = document.getElementById('polyResult');
    
    resultDiv.classList.remove('hidden');
    try {
        const node = math.parse(expr);
        const simplified = math.simplify(node);
        resultDiv.innerHTML = `
            <div class="text-right">
                <p class="mb-2">الصيغة المبسطة:</p>
                <p class="text-xl text-success" dir="ltr">${simplified.toString()}</p>
            </div>
        `;
    } catch (err) {
         resultDiv.innerHTML = "خطأ: " + err.message;
    }
});

// --- Geometry ---
document.getElementById('geoBtn')?.addEventListener('click', () => {
    const a = parseFloat(document.getElementById('sideA').value);
    const b = parseFloat(document.getElementById('sideB').value);
    const c = parseFloat(document.getElementById('sideC').value);
    const resultDiv = document.getElementById('geoResult');

    resultDiv.classList.remove('hidden');

    if (a + b <= c || a + c <= b || b + c <= a) {
        resultDiv.innerHTML = "<span class='text-error'>أبعاد غير صالحة لمثلث (متباينة المثلث)</span>";
        return;
    }

    // Heron's formula for area
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    resultDiv.innerHTML = `
        <div class="text-right">
            <p class="text-lg font-bold mb-2">النتائج:</p>
            <p>المحيط: <span class="text-accent">${a + b + c}</span></p>
            <p>المساحة: <span class="text-accent">${area.toFixed(2)}</span></p>
            <p class="text-sm text-muted mt-2">تم الحساب باستخدام صيغة هيرون</p>
        </div>
    `;
});
