import './style.css';

const baseURL = import.meta.env.VITE_API_BASE_URL;
console.log("🌐 baseURL 확인:", baseURL);

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const age = parseInt(e.target.age.value);

  const genderEl = document.querySelector('#genderGroup .select-option.active');
  const roleEl = document.querySelector('#roleGroup .select-option.active');

  if (!genderEl || !roleEl) {
    alert("❗ Please select both gender and role.");
    return;
  }

  const gender = genderEl.dataset.value;
  const role = roleEl.dataset.value;

  const payload = {
    name,
    age,
    gender,
    role
  };

  try {
    const res = await fetch(`${baseURL}user/caregiver/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    console.log("✅ 등록 응답:", data);
    alert("✅ 등록 완료: " + JSON.stringify(data));
  } catch (err) {
    console.error("❌ 등록 실패:", err);
    alert("❌ 에러 발생: " + err.message);
  }
});