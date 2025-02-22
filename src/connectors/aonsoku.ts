export {};

Connector.playerSelector = 'footer';

Connector.trackSelector = '[data-testid="track-title"]';

Connector.artistSelector = '[data-testid="track-artist-url"] span';

const filter = MetadataFilter.createFilter({
	album: retrieveAlbum,
});

function retrieveAlbum(text: string) {
	const data = JSON.parse(text);
	return data['state']['songlist']['currentSong']['album'];
}

Connector.getAlbum = () => {
	return localStorage.getItem('player_store');
};

Connector.applyFilter(filter);

Connector.currentTimeSelector = '[data-testid="player-current-time"]';

Connector.durationSelector = '[data-testid="player-duration-time"]';

Connector.pauseButtonSelector = '[data-testid="player-button-pause"]';

Connector.trackArtSelector = '[data-testid="track-image"]';
