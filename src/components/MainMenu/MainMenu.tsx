import style from 'src/app.module.less';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface iPageLink {
  link: string;
  title: string;
}

export const MainMenu = () => {
  const location = useLocation();

  const pagesList: iPageLink[] = [
    {
      link: '/',
      title: 'Главная',
    },
    {
      link: '/chats',
      title: 'Чаты',
    },
    {
      link: '/profile',
      title: 'Профиль',
    },
  ];

  return (
    <nav className={style.mainMenu}>
      <ul>
        {pagesList.map((link, idx) => (
          <li key={idx}>
            <RouterLink
              to={link.link}
              className={location.pathname === link.link ? style.active : null}
            >
              {link.title}
            </RouterLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
