import { useMutation } from "@tanstack/react-query";
import type { InquiryData } from "../backend.d";
import { useActor } from "./useActor";

export function useSubmitInquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: InquiryData) => {
      if (!actor) throw new Error("Backend not available");
      return actor.submitInquiry(data);
    },
  });
}
