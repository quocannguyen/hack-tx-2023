"use client"

export default function TrackPlayer({
    trackId
}: {
    trackId: string
}) {
    let source = "https://open.spotify.com/embed/track/" + trackId + "?utm_source=generator&theme=0"
    return (
        <iframe
            title="Spotify Embed: Recommendation Playlist "
            src={source}
            width="100%"
            height="100%"
            style={{ minHeight: '360px' }}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        />
    )
}