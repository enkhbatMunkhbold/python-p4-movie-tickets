import { useLocation, useNavigate } from 'react-router-dom'
import Ticket from './Ticket'

const Tickets = ({ user, setUser }) => {
  const navigate = useNavigate()
  const location = useLocation();
  const { movie } = location.state || {};

  function handleDeleteTicket(ticketId) {
    setUser(prevUser => ({
      ...prevUser,
      tickets: prevUser.tickets.filter(ticket => ticket.id !== ticketId),
    }));
    navigate('/profile')
  }

  function handleEditSave(editedTicket) {
    console.log("editedTicket from Tickets:", editedTicket);
    setUser(prevUser => ({
      ...prevUser,
      tickets: prevUser.tickets.map(ticket => 
        ticket.id === editedTicket.id ? editedTicket : ticket
      ),
    }));
  }

  function renderTickets() {
    // Filter tickets from user.tickets (which updates when edited) instead of movie.tickets (static from location.state)
    const userTickets = user.tickets.filter(ticket => ticket.movie && ticket.movie.id === movie.id);
    return userTickets.map(ticket => (
      <Ticket key={ticket.id} ticket={ticket} onEditTicket={handleEditSave} onDeleteTicket={handleDeleteTicket}/>
    ));
  }

  return (
    <div>
      <>
        <h3>Your Tickets for {movie.title}:</h3>
        {user.tickets && user.tickets.filter(ticket => ticket.movie && ticket.movie.id === movie.id).length > 0 ? (
          <ul>
            {renderTickets()}
          </ul>
        ) : (
          <p>No tickets purchased yet.</p>
        )}
      </>      
    </div>
  )
}

export default Tickets