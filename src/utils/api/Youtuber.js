import axios from "axios";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

const BASE_URL = `${process.env.REACT_APP_PUBLIC_BASE_URL}/youtuber`;

export const useGetYoutuberRanking = () => {
  return useQuery(
    ["youtuber_ranking"],
    async () => axios.get(`${BASE_URL}/top`),
    {
      onSuccess: (e) => {
        console.log(e);
        return e;
      },
      onError: (err) => {
        toast.error(`개발자에게 문의해주세요.`);
      },
    }
  );
};

export const useGetIncreaseYoutuber = () => {
  return useQuery(
    ["youtuber_increase"],
    async () => axios.get(`${BASE_URL}/increase`),
    {
      onSuccess: (e) => {
        return e;
      },
      onError: (err) => {
        toast.error(`개발자에게 문의해주세요.`);
      },
    }
  );
};

export const useGetYoutuber = () => {
  return useQuery(["youtuber"], async () => axios.get(`${BASE_URL}/all`), {
    onSuccess: (e) => {
      return e;
    },
    onError: (err) => {
      toast.error(`개발자에게 문의해주세요.`);
    },
  });
};

export const useGetYoutuberDetail = (youtuberName) => {
  return useQuery(
    async () => axios.get(`${BASE_URL}/details?youtuber-name=${youtuberName}`),
    {
      onSuccess: (e) => {
        return e;
      },
      onError: (err) => {
        toast.error(`개발자에게 문의해주세요.`);
      },
    }
  );
};

export const useGetYoutuberChart = (youtuberName) => {
  return useQuery(
    async () => axios.get(`${BASE_URL}/chart?youtuber-name=${youtuberName}`),
    {
      onSuccess: (e) => {
        return e;
      },
      onError: (err) => {
        toast.error(`개발자에게 문의해주세요.`);
      },
    }
  );
};

export const useGetYoutuberAskPrice = (youtuberName) => {
  return useQuery(
    async () =>
      axios.get(`${BASE_URL}/ask-price?youtuber-name=${youtuberName}`),
    {
      onSuccess: (e) => {
        return e;
      },
      onError: (err) => {
        toast.error(`개발자에게 문의해주세요.`);
      },
    }
  );
};
