import MeetingPage from "./MeetingPage";
interface MeetingPageProps {
  params: { id: string };
}

export default function Page({ params: { id } }: MeetingPageProps) {
  return <MeetingPage id={id} />;
}
