// 우클릭 방지
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// 키보드 단축키 방지
document.addEventListener('keydown', function(e) {
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
    }
});

function startAnalysis() {
    const userInput = document.getElementById('userInput').value;
    const loadingBar = document.getElementById('loadingBar');
    const statusMessage = document.getElementById('statusMessage');
    const result = document.getElementById('result');

    // 초기화
    loadingBar.style.width = '0';
    loadingBar.classList.remove('hidden');
    result.textContent = '';

    // 로딩바 애니메이션 시작
    setTimeout(() => {
        loadingBar.style.width = '100%';
    }, 0);

    // "분석중" 메시지 초기화 및 점 애니메이션 시작
    statusMessage.textContent = '분석중';
    dotCount = 0;
    increasing = true;
    interval = setInterval(updateDots, 300);

    // 3초 후에 결과 출력
    setTimeout(() => {
        clearInterval(interval);
        statusMessage.textContent = '';
        result.textContent = '분석결과 : '+userInput;
        loadingBar.classList.add('hidden');
    }, 3000);
}

function updateDots() {
    const statusMessage = document.getElementById('statusMessage');
    if (increasing) {
        dotCount++;
        if (dotCount > 3) {
            increasing = false;
        }
    } else {
        dotCount--;
        if (dotCount < 1) {
            increasing = true;
        }
    }
    statusMessage.textContent = '분석중' + '.'.repeat(dotCount);
}

