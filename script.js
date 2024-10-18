// Responsive Navigation Menu Toggle
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "block" ? "none" : "block";
});

// Articles Data (Simulated Data Fetching)
const articles = [
  {
    title: "Understanding Phishing Attacks",
    description:
      "Phishing is one of the most common cyber threats. Learn how to recognize and avoid phishing scams.",
    link: "#",
  },
  {
    title: "Top 10 Cybersecurity Tips",
    description:
      "Discover essential tips to protect yourself online and keep your data secure.",
    link: "#",
  },
  {
    title: "The Rise of Ransomware",
    description:
      "Ransomware attacks are on the rise. Find out what you need to know to defend against them.",
    link: "#",
  },
  {
    title: "What is a Zero-Day Exploit?",
    description:
      "Zero-day exploits are vulnerabilities unknown to software vendors. Learn how to protect against them.",
    link: "#",
  },
];

// Load Articles into the DOM
const articlesContainer = document.getElementById("articles");

articles.forEach((article) => {
  const articleElement = document.createElement("article");
  articleElement.innerHTML = `
        <h4>${article.title}</h4>
        <p>${article.description}</p>
        <a href="${article.link}">Read More</a>
    `;
  articlesContainer.appendChild(articleElement);
});

function goHome() {
  console.log("Home link clicked!");
  window.location.href = "home.html";
  // window.location.href = '/'; // Uncomment this line to navigate to the home page
}

document
  .getElementById("contactLink")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Perform any necessary actions, such as updating content or logging
    console.log("Contact link clicked");

    // Navigate to the "Details" section of the Contact page
    window.location.href = "contact.html#details";
  });
