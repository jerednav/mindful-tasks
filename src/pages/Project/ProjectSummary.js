import Avatar from "../../components/Avatar";

export default function ProjectSummary({ project }) {
  return (
    <div>
      <div class='project-summary'>
        <h2 class='page-title'>{project.name}</h2>
        <p class='due-date'>
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p class='details'>{project.details}</p>
        <h4>Project is assigned to:</h4>
        {project.assignedUsersList.map((user) => (
          <div key={user.id}>
            <Avatar src={user.photoURL} />
          </div>
        ))}
      </div>
    </div>
  );
}
