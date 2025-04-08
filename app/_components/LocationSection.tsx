function LocationSection() {
  return (
    <div
      id="location"
      className="flex flex-col justify-center items-center mt-15"
    >
      <div className="text-4xl font-bold">Konumumuz</div>
      <div className="mt-5">
        <p>Adres: Tınaztepe, Eşrefpaşa Cd. 267 A, 35270 Konak/İzmir</p>
      </div>
      <div className="w-full max-w-6xl mx-auto h-[500px] my-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.3628742663086!2d27.128970699999996!3d38.4099781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8df196fe111%3A0x7f4bec55f415faff!2zQXRhdMO8cmvDp8O8IETDvMWfw7xuY2UgRGVybmXEn2kgR2F6aSBBecWfZSBBbHTEsW50YcWfIFnDvGtzZWsgw5bEn3JlbmltIEvEsXogw5bEn3JlbmNpIFl1cmR1!5e0!3m2!1str!2str!4v1744061740343!5m2!1str!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default LocationSection;
