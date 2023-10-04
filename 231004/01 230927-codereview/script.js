const toggleBtn = document.querySelector(".menu_toggle_btn");
const navigation = document.querySelector(".nav");

toggleBtn.addEventListener("click", () => {
  navigation.classList.toggle("active")
  console.log("hi");
});
