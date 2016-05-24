import React from 'react';

export function ProjectItem(props) {
    const { project } = props;
    return (
        <span>{project}</span>
    )
}