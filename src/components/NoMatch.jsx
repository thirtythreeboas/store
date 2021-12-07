import React from 'React';
import { getPhoneData, useLocation } from '../../../data/data';


export default function NoMatch() {

  const location = useLocation();
  const params = useParams();

  const css = {
    maxWidth: '1050px',
    width: '100%',

  }

  return (
    <div style={css}>
      <p>
        No match for <code>{location.pathname}</code>
      </p>
    </div>
  );
}
