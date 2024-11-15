// Определяем тип для свойств компонента Container
type ContainerProps = {
    // Дочерние элементы, которые будут отображаться внутри контейнера
    children: React.ReactNode;
  };
  
  // Создаем функциональный компонент Container, который принимает свойства ContainerProps
  const Container: React.FC<ContainerProps> = ({ children }) => {
    // Возвращаем JSX, который представляет собой div с классами для стилизации
    return <div className="container 2xl mx-auto w-full">{children}</div>;
  };
  
  // Экспортируем компонент Container, чтобы его можно было использовать в других частях приложения
  export default Container;