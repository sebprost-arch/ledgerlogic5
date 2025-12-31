import React from 'react';


const Contact: React.FC = () => {
    return (
        <>
            <section className="section container">
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <h1 className="text-center">Get in Touch</h1>
                    <p className="text-center text-muted" style={{ marginBottom: '3rem' }}>
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                    <form className="glass" style={{ padding: '2rem' }}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
                            <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(0,0,0,0.02)', color: 'var(--color-text)' }} />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                            <input type="email" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(0,0,0,0.02)', color: 'var(--color-text)' }} />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
                            <textarea rows={5} style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', background: 'rgba(0,0,0,0.02)', color: 'var(--color-text)' }}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
