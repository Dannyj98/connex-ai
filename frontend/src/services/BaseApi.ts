import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios"

export default class BaseAPI {
  private axiosInstance: AxiosInstance

  constructor() {
    const baseURL = import.meta.env.VITE_BACKEND_BASE_API
    console.log(baseURL)
    this.axiosInstance = axios.create({
      baseURL,
      //   withCredentials: true,
    })
  }

  public async get<T>(
    url: string,
    filters?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.request<T>({
      method: "GET",
      url,
      params: filters,
      ...config,
    })
  }

  private async request<T>(
    config: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    try {
      const token = import.meta.env.VITE_AUTH_TOKEN

      if (!token) throw new Error("No token found")

      config.headers = {
        ...config.headers,
        Authorization: token,
      }

      const response: AxiosResponse<T> = await this.axiosInstance.request<T>(
        config
      )
      return response
    } catch (err) {
      console.error(err)
      throw err
    }
  }
}
