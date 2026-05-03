import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanity";
import {
  SETTINGS_Q, PROJECTS_Q, FEATURED_PROJECTS_Q, PROJECT_BY_SLUG_Q,
  EXPERIENCE_Q, CERTIFICATES_Q, SERVICES_Q, PROCESS_Q,
} from "@/lib/queries";

const fetcher = <T>(query: string, params?: Record<string, unknown>) =>
  sanityClient.fetch<T>(query, params ?? {});

export const useSettings = () =>
  useQuery({ queryKey: ["settings"], queryFn: () => fetcher<any>(SETTINGS_Q), staleTime: 60_000 });

export const useProjects = () =>
  useQuery({ queryKey: ["projects"], queryFn: () => fetcher<any[]>(PROJECTS_Q), staleTime: 60_000 });

export const useFeaturedProjects = () =>
  useQuery({ queryKey: ["projects", "featured"], queryFn: () => fetcher<any[]>(FEATURED_PROJECTS_Q), staleTime: 60_000 });

export const useProject = (slug?: string) =>
  useQuery({
    queryKey: ["project", slug],
    queryFn: () => fetcher<any>(PROJECT_BY_SLUG_Q, { slug }),
    enabled: !!slug,
    staleTime: 60_000,
  });

export const useExperience = () =>
  useQuery({ queryKey: ["experience"], queryFn: () => fetcher<any[]>(EXPERIENCE_Q), staleTime: 60_000 });

export const useCertificates = () =>
  useQuery({ queryKey: ["certificates"], queryFn: () => fetcher<any[]>(CERTIFICATES_Q), staleTime: 60_000 });

export const useServices = () =>
  useQuery({ queryKey: ["services"], queryFn: () => fetcher<any[]>(SERVICES_Q), staleTime: 60_000 });

export const useProcess = () =>
  useQuery({ queryKey: ["process"], queryFn: () => fetcher<any[]>(PROCESS_Q), staleTime: 60_000 });
