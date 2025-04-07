interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  message,
}) => (
  <div>
    <h1>From, {name}!</h1>
    <h2>Email Address: {email}</h2>
    <h2>Phone : {phone}</h2>
    <h3>Message: {message}</h3>
  </div>
);
