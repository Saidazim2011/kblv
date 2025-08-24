  // Данные для примера
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  // 1. Вертикальный столбчатый график
  new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        { label: "Sales", data: [12, 19, 3, 5, 2, 3], backgroundColor: "#4e73df" },
        { label: "Revenue", data: [8, 11, 7, 6, 5, 4], backgroundColor: "#f6c23e" }
      ]
    }
  });

  // 2. Горизонтальный столбчатый график
  new Chart(document.getElementById("hbarChart"), {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        { label: "2024", data: [5, 15, 8, 12, 6, 10], backgroundColor: "#1cc88a" },
        { label: "2025", data: [3, 7, 6, 9, 12, 5], backgroundColor: "#e74a3b" }
      ]
    },
    options: { indexAxis: "y" }
  });

  // 3. Линейный график
  new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        { label: "Users", data: [3, 6, 4, 8, 10, 12], borderColor: "#36b9cc", fill: false },
        { label: "Visitors", data: [2, 4, 6, 5, 9, 11], borderColor: "#f6c23e", fill: false }
      ]
    }
  });

  // 4. Смешанный график (Bar + Line)
  new Chart(document.getElementById("mixedChart"), {
    data: {
      labels: labels,
      datasets: [
        { type: "bar", label: "Revenue", data: [3, 7, 4, 8, 5, 9], backgroundColor: "#fd7e14" },
        { type: "line", label: "Trend", data: [2, 5, 6, 7, 6, 10], borderColor: "#20c997" }
      ]
    }
  });

  // 5. Radar Chart
  new Chart(document.getElementById("radarChart"), {
    type: "radar",
    data: {
      labels: ["Math", "Science", "History", "Art", "Sports", "Music"],
      datasets: [
        { label: "Student A", data: [65, 59, 90, 81, 56, 55], borderColor: "#4e73df", backgroundColor: "rgba(78,115,223,0.2)" },
        { label: "Student B", data: [28, 48, 40, 19, 96, 27], borderColor: "#e74a3b", backgroundColor: "rgba(231,74,59,0.2)" }
      ]
    }
  });

  // 6. Doughnut Chart
  new Chart(document.getElementById("doughnutChart"), {
    type: "doughnut",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
      datasets: [{ data: [12, 19, 3, 5, 2], backgroundColor: ["#e74a3b", "#36b9cc", "#f6c23e", "#1cc88a", "#4e73df"] }]
    }
  });

  // 7. Pie Chart
  new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
      labels: ["Apple", "Banana", "Orange", "Mango", "Grapes"],
      datasets: [{ data: [10, 20, 30, 15, 25], backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0", "#9966ff"] }]
    }
  });