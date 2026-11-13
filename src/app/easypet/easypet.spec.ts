import { TestBed } from '@angular/core/testing';
import { Easypet } from './easypet';

describe('Easypet presentation', () => {
  it('lets visitors explore the agenda, filter appointments and return to services', async () => {
    await TestBed.configureTestingModule({ imports: [Easypet] }).compileComponents();
    const fixture = TestBed.createComponent(Easypet);
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    const clickButton = (label: string) => {
      const button = Array.from(page.querySelectorAll('button')).find(
        (item) => item.textContent?.trim() === label,
      );
      expect(button).toBeDefined();
      button!.click();
      fixture.detectChanges();
    };
    expect(page.textContent).toContain('Demonstração interativa');
    clickButton('Agendamentos');
    expect(page.querySelectorAll('tbody tr')).toHaveLength(4);
    clickButton('Pendente');
    expect(page.querySelectorAll('tbody tr')).toHaveLength(1);
    expect(page.querySelector('tbody')?.textContent).toContain('Mel');
    clickButton('Todos');
    expect(page.querySelectorAll('tbody tr')).toHaveLength(4);
    clickButton('Serviços e pacotes');
    expect(page.textContent).toContain('Rotina de banho');
    expect(page.querySelector('table')).toBeNull();
  });
});
