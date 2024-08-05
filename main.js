function hideCoupon() {
  var couponSection = document.querySelector(".coupon");
  couponSection.style.display = "none";
}

const hamburgerMenu = document.getElementById("hamburgerMenu");
const mobileMenu = document.getElementById("mobileMenu");

// 햄버거 메뉴 클릭 이벤트
hamburgerMenu.addEventListener("click", (event) => {
  // 모바일 메뉴에 'show' 클래스 토글
  mobileMenu.classList.toggle("show");
  // 클릭 이벤트의 전파를 막아 다른 클릭 이벤트에 영향을 미치지 않도록 함
  event.stopPropagation();
});

// 메뉴 외부 클릭 시 메뉴 닫기
document.addEventListener("click", (event) => {
  if (
    !mobileMenu.contains(event.target) &&
    !hamburgerMenu.contains(event.target)
  ) {
    mobileMenu.classList.remove("show");
  }
});
