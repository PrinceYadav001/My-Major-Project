// Wait for DOM to be ready and mapboxgl to be available
document.addEventListener("DOMContentLoaded", function () {
    if (typeof mapboxgl === "undefined") {
        console.error("Mapbox GL JS not loaded.");
        return;
    }
    if (!mapToken || mapToken === "undefined") {
        console.error("Mapbox token missing.");
        return;
    }

    mapboxgl.accessToken = mapToken;

    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        center: listing.geometry.coordinates,
        zoom: 9,
    });

    // Marker + Popup
    new mapboxgl.Marker({ color: "#fe424d" })
        .setLngLat(listing.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<h5 style="margin:0 0 4px;">${listing.location}</h5>
                 <p style="margin:0;font-size:0.8rem;color:#717171;">Exact location shared after booking</p>`
            )
        )
        .addTo(map);

    // Zoom & Rotate Controls
    map.addControl(new mapboxgl.NavigationControl(), "top-left");
});
