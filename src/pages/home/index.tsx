import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  interface ILink {
    title: string;
    link: string;
  }

  const data: ILink[] = [
    {
      title: 'Từ vựng tiếng Nhật',
      link: '/learning/japan/vocabulary',
    },
    {
      title: 'Kanji tiếng Nhật',
      link: '/learning/japan/kanji',
    },
    {
      title: 'Đề thi thử JLPT N5',
      link: '/learning/japan/exam',
    },
  ];

  return (
    <>
      <div className="row">
        {data.map((value, key) => (
          <Fragment key={key}>
            <div className="col-12 col-sm-12 col-md-3 mt-2">
              <div className="card">
                <div className="card-header font-size-16">
                  <Link to={value.link}>
                    <b>{value.title}</b>
                  </Link>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};
