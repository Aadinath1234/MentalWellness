
import React, { useEffect, useState } from 'react';

export default function BreathingMeditationGuide() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedScore = localStorage.getItem('breathingExerciseScore');
    if (savedScore) setScore(Number(savedScore));
  }, []);

  const exercises = [
    {
      name: 'Box Breathing',
      image: 'data:image/jpeg;base64,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',
      video: 'https://www.youtube.com/embed/tEmt1Znux58',
      description: 'A simple technique that involves inhaling, holding, exhaling, and holding again — each for 4 seconds.',
      pros: ['Reduces stress and anxiety', 'Enhances focus', 'Improves lung capacity'],
      cons: ['Can feel unnatural at first', 'Not ideal for people with respiratory issues']
    },
    {
      name: '4-7-8 Breathing',
      image: 'https://th.bing.com/th/id/OIP.KzJoq9u5lQK7LhBZoCODhgHaJg?w=220&h=283&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      video: 'https://www.youtube.com/embed/_xQJ2O4b5TM',
      description: 'Inhale for 4 seconds, hold for 7, and exhale for 8. It is popular for helping with sleep and relaxation.',
      pros: ['Promotes deep relaxation', 'Helpful for insomnia', 'Slows heart rate'],
      cons: ['Takes practice to get used to', 'Not recommended right after eating']
    },
    {
      name: 'Mindfulness Meditation',
      image: 'https://th.bing.com/th/id/OIP.UTtpt-vwX26-M5t65Faz2gHaFF?w=301&h=207&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      video: 'https://www.youtube.com/embed/inpok4MKVLM',
      description: 'Focuses on being intensely aware of what you’re sensing and feeling in the moment without judgment.',
      pros: ['Improves emotional regulation', 'Reduces stress', 'Enhances self-awareness'],
      cons: ['Requires consistent practice', 'May bring up difficult emotions']
    }
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center mb-4 text-blue-700">Breathing & Meditation Guide</h1>
      {/* <p className="text-center mb-6 text-gray-600">Your current breathing exercise score: <span className="font-semibold text-green-600">{score}</span></p> */}

      {exercises.map((exercise, index) => (
        <div key={index} className="mb-10 border-b pb-6">
          <h2 className="text-2xl font-semibold text-blue-600">{exercise.name}</h2>
          <p className="text-gray-700 mt-2">{exercise.description}</p>
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <img src={exercise.image} alt={exercise.name} className="w-full md:w-1/2 md:h-60 rounded-lg object-cover" />
            <iframe
              className="w-full md:w-1/2 rounded-lg"
              height="250"
              src={exercise.video}
              title={exercise.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-green-600">Pros:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {exercise.pros.map((pro, i) => (
                <li key={i}>{pro}</li>
              ))}
            </ul>
            <h3 className="font-semibold text-red-600 mt-2">Cons:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {exercise.cons.map((con, i) => (
                <li key={i}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}



