/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package br.com.smpi.util;

/**
 *
 * @author Universidade Federal
 */
import javax.faces.event.PhaseEvent;
import javax.faces.event.PhaseId;
import javax.faces.event.PhaseListener;
import org.hibernate.Session;

public class PhaseListenerSmpi implements PhaseListener {

    //Antes da Fase
    @Override
    public void beforePhase(PhaseEvent fase) {
        System.out.println("Antes da fase: "+ fase.getPhaseId());
        if (fase.getPhaseId().equals(PhaseId.RESTORE_VIEW)) {            
            Session session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            FacesContextUtil.setRequestSession(session);            
        }
    }
    
    //Depois da Fase
    @Override
    public void afterPhase(PhaseEvent fase) {
        System.out.println("Depois da fase: "+ fase.getPhaseId());
        if (fase.getPhaseId().equals(PhaseId.RENDER_RESPONSE)) {
            Session session = FacesContextUtil.getRequestSession();
            try {
                session.getTransaction().commit();
            } catch (Exception e) {
                if (session.getTransaction().isActive()) {
                    session.getTransaction().rollback();
                }
            } finally{
                session.close();
            }
        }
    }

    @Override
    public PhaseId getPhaseId() {
        return PhaseId.ANY_PHASE;
    }
    
}
