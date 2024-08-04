
import { setupEditableElement } from './editableElement.js';
import { setupContainer } from './container.js';
import { setupEditableList } from './editableList.js';

export function setupExperience() {
  const title = setupEditableElement({
    elementType: 'h1',
    localStorageKey: 'experienceTitle',
    maxWidth: 387,
    maxHeight: 21,
    defaultValue: 'Experience',
  });

  const date1 = setupEditableElement({
    elementType: 'h4',
    localStorageKey: 'jobDate1',
    maxWidth: 150,
    maxHeight: 12,
    defaultValue: 'Jun. 2023 - Present',
  });

  const badge1 = setupEditableElement({
    elementType: 'h4',
    localStorageKey: 'badge',
    maxWidth: 150,
    maxHeight: 16,
    defaultValue: 'most recent',
    animationClass: 'badgeBackgroundAnimation',
  });

  badge1.classList.add('badge');

  const job1Header = setupContainer({
    elementType: 'section',
    className: 'jobHeader',
  });
  job1Header.appendChild(date1);
  job1Header.appendChild(badge1);

  const job1 = setupEditableElement({
    elementType: 'h3',
    localStorageKey: 'jobName1',
    maxWidth: 124,
    maxHeight: 15,
    defaultValue: 'Marketing Manager',
  });

  const job1Type = setupEditableElement({
    elementType: 'h4',
    localStorageKey: 'job1Type1',
    maxWidth: 124,
    maxHeight: 12,
    defaultValue: 'Pankayam | Full-time',
  });

  const job1InfoBox = setupContainer({
    elementType: 'section',
    className: 'jobInfoBox',
  });
  job1InfoBox.appendChild(job1);
  job1InfoBox.appendChild(job1Type);

  const job1DescriptionBox = setupEditableList({
    listItems: [
      'Strategy development and planning of campaigns that promote the business and generate genuine traffic',
      'SEO Content Creation for Blogs, Website, Social media',
    ],
    localStorageKeyPrefix: 'job1DescriptionBox',
    itemMaxWidth: 230,
  });

  const job1Content = setupContainer({
    elementType: 'section',
    className: 'jobContent',
  });
  job1Content.appendChild(job1InfoBox);
  job1Content.appendChild(job1DescriptionBox);

  const job1Box = setupContainer({
    elementType: 'section',
    className: 'jobBox',
  });
  job1Box.appendChild(job1Header);
  job1Box.appendChild(job1Content);

  const date2 = setupEditableElement({
    elementType: 'h4',
    localStorageKey: 'jobDate2',
    maxWidth: 150,
    maxHeight: 12,
    defaultValue: '2017 - Present',
  });

  const job2Header = setupContainer({
    elementType: 'section',
    className: 'jobHeader',
  });
  job2Header.appendChild(date2);

  const job2 = setupEditableElement({
    elementType: 'h3',
    localStorageKey: 'jobName2',
    maxWidth: 124,
    maxHeight: 15,
    defaultValue: 'Graphic / Web designer',
  });

  const job2Type = setupEditableElement({
    elementType: 'h4',
    localStorageKey: 'job2Type',
    maxWidth: 124,
    maxHeight: 12,
    defaultValue: 'Freelance',
  });

  const job2InfoBox = setupContainer({
    elementType: 'section',
    className: 'jobInfoBox',
  });
  job2InfoBox.appendChild(job2);
  job2InfoBox.appendChild(job2Type);

  const job2DescriptionBox = setupEditableList({
    listItems: [
      'Development of internal projects from scratch, product design of brands ',
      'Landing page, webapps and hybrid apps',
      'Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.',
    ],
    localStorageKeyPrefix: 'job2DescriptionBox',
    itemMaxWidth: 230,
  });

  const job2Content = setupContainer({
    elementType: 'section',
    className: 'jobContent',
  });
  job2Content.appendChild(job2InfoBox);
  job2Content.appendChild(job2DescriptionBox);

  const job2Box = setupContainer({
    elementType: 'section',
    className: 'jobBox',
  });
  job2Box.appendChild(job2Header);
  job2Box.appendChild(job2Content);

  const date3 = setupEditableElement({
    elementType: 'h4',
    localStorageKey: 'jobDate3',
    maxWidth: 150,
    maxHeight: 12,
    defaultValue: 'Sep. 2021 - Jun. 2023',
  });

  const job3Header = setupContainer({
    elementType: 'section',
    className: 'jobHeader',
  });
  job3Header.appendChild(date3);

  const job3 = setupEditableElement({
    elementType: 'h3',
    localStorageKey: 'jobName3',
    maxWidth: 124,
    maxHeight: 15,
    defaultValue: 'Legal Assistant',
  });

  const job3Type = setupEditableElement({
    elementType: 'h4',
    localStorageKey: 'job3Type',
    maxWidth: 124,
    maxHeight: 12,
    defaultValue: 'Law Firm | Intern',
  });

  const job3InfoBox = setupContainer({
    elementType: 'section',
    className: 'jobInfoBox',
  });
  job3InfoBox.appendChild(job3);
  job3InfoBox.appendChild(job3Type);

  const job3DescriptionBox = setupEditableList({
    listItems: [
      'Provide administrative support to lawyer and enhance office effectiveness',
      'Handle communication with clients, witnesses etc.',
      'Repair case briefs and summarize depositions, interrogatories and testimony',
    ],
    localStorageKeyPrefix: 'job3DescriptionBox',
    itemMaxWidth: 230,
  });

  const job3Content = setupContainer({
    elementType: 'section',
    className: 'jobContent',
  });
  job3Content.appendChild(job3InfoBox);
  job3Content.appendChild(job3DescriptionBox);

  const job3Box = setupContainer({
    elementType: 'section',
    className: 'jobBox',
  });
  job3Box.appendChild(job3Header);
  job3Box.appendChild(job3Content);

  const jobsContainer = setupContainer({
    elementType: 'section',
    className: 'jobsContainer',
  });
  jobsContainer.append(job1Box, job2Box, job3Box);

  return setupContainer({
    elementType: 'div',
    className: 'experienceContainer',
    childElements: [title, jobsContainer],
    animate: true,
  });
}
