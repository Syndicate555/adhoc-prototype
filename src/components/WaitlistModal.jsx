import { useState } from 'react';

const WaitlistModal = ({ setIsWaitlistModalOpen, setWaitlistSuccessMessage }) => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState('');

    const waitlistId = 'cm421fsph0002w99xclz398gc';
    const waitlistApiKey = 'cm421fsph0003w99xmikaa3s5';

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleJoinNow = async () => {
        if (!email) {
            setSubmissionMessage('Please enter a valid email address.');
            return;
        }
        console.log("handleJoinNow Clicked: ", email)

        setIsSubmitting(true);
        setSubmissionMessage('');

        try {
            const response = await fetch('https://www.waitlist.email/api/subscribers/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Waitlist-Api-Key': waitlistApiKey
                },
                body: JSON.stringify({
                    waitlist: waitlistId,
                    email
                }),
            });

            const body = await response.json();
            console.log("Response: ", response)

            if (!response.ok) {
                throw new Error(body.message);
            }

            
            setEmail('');
            setWaitlistSuccessMessage('Successfully joined the waitlist!');
            setIsWaitlistModalOpen(false);

        } catch (error) {
            console.error('Error joining waitlist: ', error);
            setSubmissionMessage(error.message || 'An error occured. Please try again later. ');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseModal = () => {
        setIsWaitlistModalOpen(false);
    };

    return ( 
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={handleCloseModal}
            aria-label="Waitlist Modal"
        >
            <div
                className="bg-white rounded-lg p-6 w-full max-w-md mx-4 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-semibold mb-4 text-center text-black">
                    Join Our Waitlist
                </h2>
                <div className="flex flex-col">
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email address"
                        className="border rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                        aria-label="Email address"
                        required
                    />
                    <button
                        onClick={handleJoinNow}
                        className="bg-green-600 text-black py-2 rounded-md font-semibold hover:bg-green-700 hover:text-white transition-colors"
                        disabled={isSubmitting}
                        aria-label="Join Now"
                    >
                        {isSubmitting ? 'Submitting...' : 'Join Now'}
                    </button>
                    {submissionMessage && (
                        <p className="mt-4 text-center text-red-600">{submissionMessage}</p>
                    )}
                </div>
                <button
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                    aria-label="Close modal"
                >
                    x
                </button>
            </div>
        </div>
    )
}

export default WaitlistModal;