import React from 'react';


const FAQs: React.FC = () => {
    return (
        <>
            <section className="section container">
                <h1 className="text-center">Frequently Asked Questions</h1>
                <div style={{ maxWidth: '800px', margin: '4rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="glass" style={{ padding: '1.5rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>Question {i}?</h3>
                            <p className="text-muted">Answer to question {i} goes here. We provide detailed explanations to help you understand our services.</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default FAQs;
