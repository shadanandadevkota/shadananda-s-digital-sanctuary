import { useParams } from "react-router-dom";
import PlaceholderPage from "@/components/PlaceholderPage";
const ProjectDetail = () => {
  const { slug } = useParams();
  return (
    <PlaceholderPage
      eyebrow={`Project · ${slug}`}
      title="Project details."
      description="Full case study with images, tech stack, challenges and outcomes — coming next."
    />
  );
};
export default ProjectDetail;
