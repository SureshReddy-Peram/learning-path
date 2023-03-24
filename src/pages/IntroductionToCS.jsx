import React from 'react';
import {curriculam} from '../utils/data';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './IntroductionToCS.scss';
import {MdComputer} from 'react-icons/md'

const IntroductionToCS = () => {
  return (
    <>
      <section id="training" className="training">     
        
        <div className="timeline">
          <div className="timeline__cs">
            <h3 className="timeline__cs__header">Introduction to Computer Science</h3>
            <VerticalTimeline
              layout={`2-columns`}
              lineColor="var(--tomato-theme-main-color)"
            >
              {curriculam.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="timeline__cs__element"
                  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                  iconStyle={{ background: 'gray', color: '#fff' }}
                  icon={<MdComputer />}
                >
                  <div className="timeline-element-topic-wrapper">
                    <h3>
                      {item.topic}
                    </h3>

                    <h4>
                      {item.description}
                    </h4>

                    <p>
                      Duration : {item.duration}
                    </p>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          
        </div>
      </section> 
    </>
  )
}

export default IntroductionToCS;
