class WorkCard {
  constructor(title, description, videoFile, gitUrl, deployedUrl) {
    this.title = title;
    this.description = description;
    this.videoFile = videoFile;
    this.gitUrl = gitUrl;
    this.deployedUrl = deployedUrl;
  }
  renderHtml() {
    return `
        <div class="workCard">
          <header>
            <h3>${this.title}</h3>
          </header>
          <main>
            <video
              class="video"
              src="assets/images/${this.videoFile}"
              type="video/mp4"
              muted
            ></video>
            <p>${this.description}</p>
          </main>
          <div>
            <a href="${this.gitUrl}">Repo</a>
            <a href="${this.deployedUrl}">deployed app</a>
          </div>
          <footer></footer>
        </div>
        `;
  }
}

const workArray = [
  new WorkCard(
    "JavaScript Quiz",
    "Short, fun quiz on the fundamentals of JavaScript. Powered by JavaScript.",
    "quizvid.mp4",
    "https://github.com/BGrowcott/bg-magical-js-quiz",
    "https://bgrowcott.github.io/bg-magical-js-quiz/"
  ),
  new WorkCard(
      "Birmingham Association Banquets",
      "Restaurant finder application - search any city or postcode to find nearby restaurants.",
      "quizvid.mp4",
      "https://github.com/oli-drew/bab-group-project-by-slackware",
      "https://oli-drew.github.io/bab-group-project-by-slackware/"
  )
];

