const Header = ({courseName}) => <h1>{courseName}</h1>

const Content = ({parts}) => (
  <div>
    {parts.map(part => <Part key={part.id} part={part} />)}
  </div>
)

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({total}) => <b>Total of {total} exercises</b>

const Course = ({courses}) => courses.map((course) => <div key = {course.id}>
  <Header courseName={course.name} />
  <Content parts={course.parts} />
  <Total total={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
</div>
)

export default Course