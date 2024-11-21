//13873942
import React from 'react';

const ButtonsCard = () => {
    const handleButtonClick = async (buttonType) => {
        if (buttonType === 'Button 1') {
            const data = {
                "plain": 'blue',
                "red": 1,
                "green":0
            };

            try {
                const response = await fetch('http://192.168.1.26/led', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    console.log('JSON sent successfully');
                } else {
                    console.error('Failed to send JSON');
                }
            } catch (error) {
                console.error('Error sending JSON:', error);
            }
        } else if (buttonType === 'Button 2') {
            const data = {
                "plain": 'blue',
                "green": 1,
                "red":0
            };

            try {
                const response = await fetch('http://192.168.1.26/led', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    console.log('JSON sent successfully');
                } else {
                    console.error('Failed to send JSON');
                }
            } catch (error) {
                console.error('Error sending JSON:', error);
            }
        };
    }
    return (
        <div>
            <button style={{ padding: '10px 20px', borderRadius: '5px', margin: '5px', fontSize: '16px' }} onClick={() => handleButtonClick('Button 1')}>Button 1</button>
            <button style={{ padding: '10px 20px', borderRadius: '5px', margin: '5px', fontSize: '16px' }} onClick={() => handleButtonClick('Button 2')}>Button 2</button>
        </div>
    );
};

export default ButtonsCard;