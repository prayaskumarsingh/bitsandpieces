let episodesHTML = new String();
let i = 0;

episodesHTML = `<div class="container">
                    <div class="row mb-5" data-aos="fade-up">
                        <div class="col-md-12 text-center">
                            <h2 class="font-weight-bold text-black">Recent Podcasts</h2>
                        </div>
                    </div>`;

while (episodesList[i]) {
  episodesHTML += `<div
                        class="d-block d-md-flex podcast-entry bg-white mb-5"
                        data-aos="fade-up"
                    >
                        <div
                        class="image"
                        style="background-image: url('${episodesList[i].img}');"
                        ></div>
                        <div class="text">
                            <h3 class="font-weight-light">
                                <a 
                                >Episode ${episodesList[i].epNum}: ${episodesList[i].epName}</a
                                >
                            </h3>
                            <div class="text-white mb-3">
                                <span class="text-black-opacity-05"
                                ><small
                                    >with ${episodesList[i].with} <span class="sep">/</span> ${episodesList[i].date}
                                </small></span
                                >
                            </div>
                            <p class="mb-4">
                                ${episodesList[i].about}
                                <a href="${episodesList[i].linkYT}" class="link-to-yt"
                                >Watch on YouTube</a
                                >
                                <a href="${episodesList[i].linkSpotify}" class="link-to-Spotify"
                                >Listen on Spotify</a
                                >
                            </p>
                        </div>
                    </div>`;

  i++;
}
episodesHTML += `</div>`;

document.getElementById("recentEps").innerHTML = episodesHTML;
