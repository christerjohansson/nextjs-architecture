const BASE_URL = process.env.NEXT_PUBLIC_API_URI as string;

const request = async <T>(
  method: string,
  url: string,
  data?: any,
  config?: RequestInit,
): Promise<T> => {
  const headers = {
    'Content-Type': 'application/json',
    ...config?.headers,
  };

  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    headers,
    body: data ? JSON.stringify(data) : null,
    ...config,
  });

  if (!response.ok) {
    const error = await response.json();
    return Promise.reject(error);
  }

  return response.json();
};

export const get = <T>(
  url: string,
  params?: Record<string, string>,
  config?: RequestInit,
): Promise<T> => {
  const queryParams = params
    ? '?' + new URLSearchParams(params).toString()
    : '';
  return request('GET', `${url}${queryParams}`, undefined, config);
};

export const post = <T>(
  url: string,
  data?: any,
  config?: RequestInit,
): Promise<T> => {
  return request('POST', url, data, config);
};

export const put = <T>(
  url: string,
  data?: any,
  config?: RequestInit,
): Promise<T> => {
  return request('PUT', url, data, config);
};

export const del = <T>(url: string, config?: RequestInit): Promise<T> => {
  return request('DELETE', url, undefined, config);
};
