const url = 'https://yt-api.p.rapidapi.com/playlist?id=OLNl-6rL6yGogvo9jU1gxYnlgf8pay5i4RA';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '52c86ddc1amsh88a88fe885979e1p18b2eajsncb1d2fd3f2d0',
		'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
	}
};

const content = document.getElementById("content");


async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}


(async () => {
    try {
        const videos = await fetchData(url);
        console.log(videos.data);
        let view = `
            ${videos.data.map(video => `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.thumbnail[3].url}" alt="" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                        <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/watch?v=${video.videoId}_channel=${video.channelId}"><span aria-hidden="true" class="absolute inset-0"></span></a>
                        ${video.title}
                        </h3>
                    </div>
                </div>
            `).slice(0,8).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();