import React from 'react';
import emojipedia from '../emojipedia';
import Entry from './Entry';

function Emoji() {
    return (
        <div>
            <h1>
                <span>emojipedia</span>
            </h1>

            <dl className="dictionary">
                {emojipedia.map(item => <Entry
                    key={item.id}
                    emoji={item.emoji}
                    name={item.name}
                    description={item.meaning} />)}
            </dl>
        </div>
    )
}

export default Emoji;