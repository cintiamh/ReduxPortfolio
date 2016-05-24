import React from 'react';
import ProjectItem from './ProjectItem';

export function ProjectsList(props) {
    const { projects } = props;

    return (
        <div>
            <ul>
                {
                    projects.map(p => (
                        <li>
                            <ProjectItem project={p} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}