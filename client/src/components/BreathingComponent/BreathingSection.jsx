import React from "react";
import { Link } from "react-router-dom";
function BreathingSection() {
  return (
    <div>
      {/* carousel */}
      <div>
        <div className="carousel w-full max-sm:w-96 max-md:w-96">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Deep Breathing Outdoors"
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://media.istockphoto.com/id/2080924889/vector/box-breathing-method-to-calm-down-and-stop-anxiety-stress-outline-diagram.jpg?s=612x612&w=0&k=20&c=p2gcyrArCgtVFm9H-3T-JXhUf2RqzY1Sbh-e-zLYTfA="
              alt="Yoga Breathing Exercise"
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://media.istockphoto.com/id/1404928435/photo/woman-doing-breathing-exercises.jpg?s=612x612&w=0&k=20&c=9geIgxFELxtuJTkg1q0baW9eOb6KX6qZwvlLxvOFUb4="
              alt="Meditation and Calm"
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://media.istockphoto.com/id/821565296/photo/breathe.jpg?s=612x612&w=0&k=20&c=p5M-EAsNlitSlnjRm4OGrTwgte92RZU2HtvY37KFv2A="
              alt="Breathing Exercise at Sunrise"
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-15 ">
        {/* card 1 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://t4.ftcdn.net/jpg/11/27/98/43/240_F_1127984329_uyO0ssxgjVEDHlLJm0Z5q67yDyJXVTFZ.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Breathe to Perform: Unlocking Your Exercise Potential
            </h2>
            <p>
              Proper breathing during workouts can significantly enhance your
              physical performance. Controlled breathing helps stabilize your
              core, improve endurance, and maintain focus, making your workouts
              more efficient and effective.
            </p>
            <div className="card-actions justify-end">
              <Link to="https://www.youtube.com/watch?v=1z7iEzsFKXo">
                <button className="btn btn-primary">click here </button>
              </Link>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://t3.ftcdn.net/jpg/14/15/40/14/240_F_1415401415_De0OctVRVqtaItbAFjq4TD0BwXMpk6dc.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">The Power of Breath in Yoga Practice</h2>
            <p>
              In yoga, the breath is considered as important as the movement
              itself. Techniques like Ujjayi or diaphragmatic breathing connect
              the mind and body, deepen stretches, and help manage
              stress—turning physical practice into a holistic experience.
            </p>
            <div className="card-actions justify-end">
              <Link
                to="https://youtu.be/LiUnFJ8P4gM?si=5-SeigJWlcE--HSH
              "
              >
                <button className="btn btn-primary">click here </button>
              </Link>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://t3.ftcdn.net/jpg/11/94/49/36/240_F_1194493668_0abZKrklttaziLHmNZElQJiQ0mVWyw4L.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              HIIT and Breath Control: Fueling Intensity
            </h2>
            <p>
              High-Intensity Interval Training (HIIT) demands efficient oxygen
              use. Training your breath through paced inhales and forceful
              exhales can reduce fatigue, keep your heart rate in check, and
              help you push through intense bursts of activity.
            </p>
            <div className="card-actions justify-end">
              <Link to="https://youtu.be/tybOi4hjZFQ?si=eiIq9ndvnDrdNGPZ">
                <button className="btn btn-primary">click here </button>
              </Link>
            </div>
          </div>
        </div>

        {/* card 4 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://t3.ftcdn.net/jpg/14/26/75/08/240_F_1426750829_eJyWkUuHG1GHpg6clxjvzVTvqAXAdzZN.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Post-Workout Breathing: A Tool for Recovery
            </h2>
            <p>
              Breathing doesn't stop helping once your workout ends. Deep, slow
              breathing post-exercise activates the parasympathetic nervous
              system, aiding in muscle recovery, reducing cortisol, and bringing
              your body back to balance.
            </p>
            <div className="card-actions justify-end">
              <Link to="https://youtu.be/LMS3K8_5KFA?si=JV1l3FSUaWhNcfA5">
                <button className="btn btn-primary">click here </button>
              </Link>
            </div>
          </div>
        </div>

        {/* card 5 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://t4.ftcdn.net/jpg/14/31/10/29/240_F_1431102928_iPFYTmhg5uJBiTWSIdMjxrrBPn8BopET.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Breathing for Runners: Find Your Rhythm
            </h2>
            <p>
              For runners, rhythmic breathing is key to conserving energy and
              maintaining pace. Techniques like 3:2 breathing (inhale for 3
              steps, exhale for 2) help reduce side stitches and ensure a more
              efficient oxygen flow throughout the body.
            </p>
            <div className="card-actions justify-end">
              <Link to="https://youtu.be/8ln4XfRi6uw?si=bhWHJ737xsAsbntl">
                <button className="btn btn-primary">click here </button>
              </Link>
            </div>
          </div>
        </div>

        {/* card 6 */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://t4.ftcdn.net/jpg/12/00/07/69/240_F_1200076976_mcxvpt6rzeoVLtlX4FBDKvYmTr2uVhAk.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Mindful Movement: The Role of Breath in Pilates
            </h2>
            <p>
              Pilates emphasizes controlled movement paired with intentional
              breathing. Breathing patterns in Pilates support muscle
              activation, especially the core, while also promoting mental
              clarity and precise movement execution.
            </p>
            <div className="card-actions justify-end">
              <Link to="https://youtu.be/sfSDQRdIvTc?si=4s4SUNxpL6QsFT4w">
                <button className="btn btn-primary">click here </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreathingSection;
