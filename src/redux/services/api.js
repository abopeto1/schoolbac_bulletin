/**
 * This is a service to do all the api calls (get, post, put, delete)
 */

import axios from 'axios';
import {computeUrl} from '../utils';

export const baseUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8000' :
    "http://ec2-3-130-234-231.us-east-2.compute.amazonaws.com/miziki_api/public"

const api = async (method, action) => {
  const url = `${baseUrl}/api/${computeUrl(method, action)}`

  const headers = method === 'GET' ?
      {
        // 'X-Miziki-Auth-Token': sessionStorage.token,
      }
      : action.options.headers ? {
        'Content-Type': action.options.headers['Content-Type'],
        // 'X-Miziki-Auth-Token': sessionStorage.token,
      } : {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        // 'X-MIZIKI-AUTH-TOKEN': sessionStorage.token,
  }

  const config = { method, url, headers, crossDomain: true };

  if (method !== 'GET'){
    config.data = action.body
  }

  if (method === 'GET' && action.meta.type === "multi") {
    config.params = action.params;
  }

  try {
    return await axios.request(config)
  } catch (e) {
    return e
  }
};

export default api;
