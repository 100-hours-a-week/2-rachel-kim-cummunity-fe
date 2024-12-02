// make-post.js

document.addEventListener("DOMContentLoaded", () => {
    const backArrow = document.getElementById('back-arrow');
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');
    const helperText = document.getElementById('helper-text');
    const fileInput = document.getElementById('image'); 
    const fileNameElement = document.getElementById('file-name');
    const submitButton = document.getElementById('submit-button');

    // 백애로우 클릭 시
    backArrow.addEventListener('click', () => {
        window.location.href='/posts';
    });

    // 제목 입력 시 
    titleInput.addEventListener('input', (event) => {
        const titleValue = titleInput.value;
        // 제목 글자 수 제한
        if (titleValue.length > 26) {
            titleInput.value = titleValue.substring(0, 26);
        }
        updateSubmitButtonState();
    });

    // 내용 입력 시 
    contentInput.addEventListener('input', () => {
        updateSubmitButtonState();
    });

    // 파일 선택 시
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0]; 
        fileNameElement.textContent = file ? file.name : '파일을 선택해주세요.';
    });

    // 완료 버튼 클릭 시
    submitButton.addEventListener('click', () => {
        if (!isFormValid()) {
            helperText.style.display = 'block';
            helperText.textContent = '*제목, 내용을 모두 작성해주세요.';
            return;
        }

        // 게시글 제출 (fetch로 실제 API 요청 필요)
        // 예시:
        // fetch('/api/posts', {
    });

    // 유효성 검사 상태
    function isFormValid() {
        const title = titleInput.value.trim();
        const content = contentInput.value.trim();
        return title && content;
    }

    // 완료 버튼 활성화
    function updateSubmitButtonState() {
        if (isFormValid()) {
            helperText.textContent = '';
            submitButton.disabled = false; 
            submitButton.classList.add('active');
        } else {
            // 질문티비// submitButton.disabled = true;
            submitButton.classList.remove('active');
        }
    }
});