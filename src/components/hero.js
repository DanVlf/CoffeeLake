import sample from '../images/video_background.mp4'; // Ensure the correct import path for the video

export default function Hero() {
  return (
    <div className="relative isolate h-screen px-6 pt-14 lg:px-8">
        <div className="absolute inset-0   "> {/* Adjust opacity as needed */}
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%', // Set height to 100% to cover the full viewport
            objectFit: 'cover', // Ensure the video covers the area
            zIndex: -1
          }}
        >
          <source src={sample} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center z-10"> 
          <h1 className="font-rozha text-balance text-4xl tracking-tight text-white sm:text-7xl z-10">
            Coffee Lake
          </h1>
          <p className="font-montserrat text-lg leading-8 text-white">
            Dive into your brew
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        {/* Additional decorative elements can go here if needed */}
      </div>
    </div>
  );
}
