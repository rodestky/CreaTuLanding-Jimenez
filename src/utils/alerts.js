import Swal from "sweetalert2";

/**
 * Estilos/base de todas las alertas.
 */
 
const ALERT_BASE = {
  color: 'var(--parch)',
  background: 'linear-gradient(135deg, var(--maroon) 0%, var(--moss-600) 100%)',
  backdrop: 'rgba(0,0,0,0.45)',
  confirmButtonColor: 'var(--gold)',
  returnFocus: false, // no enfocar el botón al abrir.
};

export const alertInfo = (opts) => Swal.fire({ ...ALERT_BASE, icon: 'info', ...opts });
