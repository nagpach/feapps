export async function delayFn<T>(fn: (...args: any[]) => Promise<T> | T) {
    const delay = Number(sessionStorage.getItem("delay") ?? 0);
    const delayPromise = new Promise((r) => setTimeout(r, delay));
  
    const [res] = await Promise.all([fn(), delayPromise]);
  
    return res;
  }

  