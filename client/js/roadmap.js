import { jsPDF } from 'jspdf';

document.getElementById('downloadPdfBtn')?.addEventListener('click', () => {
    const doc = new jsPDF();
    
    // Add font support for Arabic would require loading a font file (base64)
    // Since we can't easily load custom fonts in this mockup without base64 strings,
    // we will use standard font and English/Transliterated text or simple layout.
    // However, jsPDF doesn't support RTL/Arabic out of the box without plugins.
    // We will simulate the export functionality.
    
    doc.setFontSize(20);
    doc.text("BAC 2027 Study Roadmap", 105, 20, { align: "center" });
    
    doc.setFontSize(12);
    doc.text("Plan generated on: " + new Date().toLocaleDateString(), 20, 40);
    
    const rows = [
        ["Sep-Oct", "Functions", "Limits, Continuity"],
        ["Nov", "Derivatives", "Calculation, Physics Apps"],
        ["Dec", "Sequences", "Arithmetic, Geometric"],
        ["Jan-Feb", "Exp & Log", "Equations, Differential"],
        ["Mar", "Complex Num", "Algebraic, Geometric Forms"]
    ];
    
    let y = 60;
    rows.forEach(row => {
        doc.text(`${row[0]}: ${row[1]} - ${row[2]}`, 20, y);
        y += 10;
    });
    
    doc.save("BAC_2027_Roadmap.pdf");
});
