// Teacher Panel Logic

// 1. Check for stored resources
function loadResources() {
    const resources = JSON.parse(localStorage.getItem('teacherResources') || '[]');
    const container = document.getElementById('resourcesList');
    
    if (resources.length === 0) {
        container.innerHTML = '<p class="text-text-muted text-center">لا يوجد محتوى منشور حالياً</p>';
        return;
    }

    container.innerHTML = resources.map((res, index) => `
        <div class="p-4 border border-surface rounded-lg flex justify-between items-center bg-background">
            <div>
                <h4 class="font-bold">${res.title}</h4>
                <span class="badge badge-info mt-1">${getArabicType(res.type)}</span>
                <span class="text-xs text-text-muted block mt-1">تم النشر: ${res.date}</span>
            </div>
            <button onclick="window.deleteResource(${index})" class="btn btn-outline text-sm text-error border-error/30 hover:bg-error/10">حذف</button>
        </div>
    `).join('');
}

function getArabicType(type) {
    const types = { 'exercise': 'تمرين', 'solution': 'حل مفصل', 'note': 'ملخص' };
    return types[type] || type;
}

// 2. Handle Upload
document.getElementById('uploadForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.getElementById('resourceTitle').value;
    const type = document.getElementById('resourceType').value;
    const fileInput = document.getElementById('fileInput');
    
    if (!title) {
        alert("يرجى إدخال عنوان");
        return;
    }
    
    // In a real app, we would upload the file to a server.
    // Here we just store the metadata.
    const newResource = {
        title,
        type,
        date: new Date().toLocaleDateString('ar-DZ'),
        fileName: fileInput.files[0]?.name || 'document.pdf'
    };
    
    const resources = JSON.parse(localStorage.getItem('teacherResources') || '[]');
    resources.unshift(newResource);
    localStorage.setItem('teacherResources', JSON.stringify(resources));
    
    // Reset form
    e.target.reset();
    document.getElementById('fileName').classList.add('hidden');
    
    loadResources();
    alert("تم نشر المحتوى بنجاح!");
});

// File input visual feedback
document.getElementById('fileInput')?.addEventListener('change', (e) => {
    const fileName = e.target.files[0]?.name;
    const nameDisplay = document.getElementById('fileName');
    if (fileName) {
        nameDisplay.textContent = fileName;
        nameDisplay.classList.remove('hidden');
    }
});

// Expose delete function
window.deleteResource = function(index) {
    if(confirm('هل أنت متأكد من حذف هذا المحتوى؟')) {
        const resources = JSON.parse(localStorage.getItem('teacherResources') || '[]');
        resources.splice(index, 1);
        localStorage.setItem('teacherResources', JSON.stringify(resources));
        loadResources();
    }
};

// Init
loadResources();
