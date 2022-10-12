import React from 'react';
import './footer.less';
import { getSearchObj } from '@/helpers/location';

const Footer: React.FC = () => {
  const user = getSearchObj().user || 'visiky';

  return (
    <footer>
      <div>
        <div>
          <span className="">Made with ❤️</span>
          <span className="author">
            by
            <span
              style={{ marginLeft: '4px', cursor: 'pointer'}}
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.open(`https://github.com/${user}`);
                }
              }}
            >
              {user}
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
